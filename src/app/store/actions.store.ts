import { createAction, props } from '@ngrx/store';
import { ICat } from '../shared/interfaces/cat.interface';

export const loadCats = createAction('[Cats Store] Load New Cats');
export const loadCatsSuccess = createAction('[Cats Store] Load New Cats Success', props<{ cats: ICat[] }>());
