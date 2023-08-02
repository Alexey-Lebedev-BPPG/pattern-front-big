import {
  CombinedState,
  PreloadedState,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { NoInfer, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StateSchema } from '../config/stateSchema';
import { createReduxStore } from '../config/store';

export interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<
    PreloadedState<CombinedState<NoInfer<StateSchema>>>
  >;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const { store, persist } = createReduxStore(
    initialState as PreloadedState<CombinedState<NoInfer<StateSchema>>>,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        {children}
      </PersistGate>
    </Provider>
  );
};
