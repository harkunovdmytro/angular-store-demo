import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICatsStore } from '../../store/reducers.store';
import { Observable } from 'rxjs';
import { ICat } from '../../shared/interfaces/cat.interface';
import { selectCats } from '../../store/selectors.store';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss'],
})
export class CatsListComponent {
  public cats$: Observable<ICat[]> = this.store.select(selectCats);

  constructor(private store: Store<ICatsStore>) {
  }
}
