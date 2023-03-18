import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICatsStore } from './reducers.store';

export const CatStoreKey = 'Cat Store Selector Key'
export const catStoreFeatureSelector = createFeatureSelector<ICatsStore>(CatStoreKey);

export const selectCats = createSelector(catStoreFeatureSelector, store => store.cats);
