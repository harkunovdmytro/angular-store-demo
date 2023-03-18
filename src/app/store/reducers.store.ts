import { ICat } from '../shared/interfaces/cat.interface';
import { createReducer, on } from '@ngrx/store';
import { loadCatsSuccess } from './actions.store';

export interface ICatsStore {
  cats: ICat[];
}

export const initialState: ICatsStore = {
  cats: [],
};

export const CatsStoreReducer = createReducer(
  initialState,
  on(loadCatsSuccess, (store, { cats }) => ({ ...store, cats })),
);
