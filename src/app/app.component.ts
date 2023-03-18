import { Component } from '@angular/core';
import { loadCats } from './store/actions.store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-store-demo';

  constructor(private store: Store) {
  }

  public ngOnInit() {
    this.store.dispatch(loadCats());
  }
}
