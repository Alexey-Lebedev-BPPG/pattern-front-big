/* eslint-disable path-checher-ulbi-example/layer-imports */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider/config/stateSchema';
import { AppDispatch } from '@/app/providers/StoreProvider/index';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
