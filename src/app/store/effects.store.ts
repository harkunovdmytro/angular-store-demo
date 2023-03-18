import { loadCats, loadCatsSuccess } from './actions.store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CatsRequestService } from '../shared/services/cats-request.service';
import { map, switchMap, tap } from 'rxjs';

@Injectable()
export class CatsEffects {
  loadCats$ = createEffect(() => this.actions$.pipe(
    ofType(loadCats),
    switchMap(() => this.catsServices.getCats().pipe(
      map(cats => loadCatsSuccess({ cats })),
    )),
  ));

  constructor(
    private actions$: Actions,
    private catsServices: CatsRequestService,
  ) {
  }
}
