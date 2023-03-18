import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsListComponent } from './cats/cats-list/cats-list.component';
import { CatDetailViewComponent } from './cats/cat-detail-view/cat-detail-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'cats', pathMatch: 'full' },
  { path: 'cats', component: CatsListComponent },
  {
    path: 'cat-details',
    children: [
      {
        path: ':id',
        component: CatDetailViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
