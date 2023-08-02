import { Reducer } from '@reduxjs/toolkit';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
  ReduxStoreWithManager,
  StateSchema,
  StateSchemaKey,
} from '@/app/providers/StoreProvider';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface IDynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = true,
}) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(([keyReducer, reducer]) => {
      const mounted = mountedReducers[keyReducer as StateSchemaKey];
      if (!mounted) {
        store.reducerManager.add(keyReducer as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${keyReducer} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount)
        Object.entries(reducers).forEach(([keyReducer]) => {
          store.reducerManager.remove(keyReducer as StateSchemaKey);
          dispatch({ type: `@DESTROY ${keyReducer} reducer` });
        });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
