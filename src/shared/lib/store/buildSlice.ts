import {
  CaseReducerActions,
  CreateSliceOptions,
  SliceCaseReducers,
  bindActionCreators,
  createSlice,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

export function buildSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
  const slice = createSlice(options);

  const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(
      () =>
        bindActionCreators<
          CaseReducerActions<CaseReducers, Name>,
          // @ts-ignore
          CaseReducerActions<CaseReducers>
        >(slice.actions, dispatch),
      [dispatch],
    );
  };

  return { ...slice, useActions };
}
