import {
  AnyAction,
  CombinedState,
  combineReducers,
  configureStore,
  createSlice,
  PreloadedState,
  Reducer,
  ReducersMapObject,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { NoInfer } from '@reduxjs/toolkit/dist/tsHelpers';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';
import createSagaMiddleware from 'redux-saga';
import { createReducerManager } from './reducerManager';
import { saga } from './rootSaga';
import { StateSchema, ThunkExtraArg, TStore } from './stateSchema';
// import { authReducer } from '@/entities/Auth';
import app from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';

export function createReduxStore(
  initialState?: PreloadedState<CombinedState<NoInfer<StateSchema>>>,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const sagaMiddleware = createSagaMiddleware();
  const isLocal =
    process.env.APP_ENV === 'local' || process.env.APP_ENV === 'dev';

  const authReducer = createSlice({
    initialState: {},
    name: 'auth',
    reducers: {},
  }).reducer;

  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    auth: combineReducers({
      authWallet: authReducer,
    }),
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage: localStorage,
      whitelist: ['auth'],
    },
    reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
  );
  const extraArg: ThunkExtraArg = { api: app };

  const store = configureStore({
    devTools: isLocal,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: !isLocal,
        serializableCheck: !isLocal,
        thunk: { extraArgument: extraArg },
      })
        .concat(rtkApi.middleware)
        .concat(sagaMiddleware),
    preloadedState: initialState,
    reducer: persistedReducer,
  }) as TStore;

  store.reducerManager = reducerManager;
  const persist = persistStore(store);
  sagaMiddleware.run(saga);

  return { persist, store };
}

export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, AnyAction>;
