import { NgModule } from '@angular/core';
import { CatsListComponent } from './cats-list/cats-list.component';
import { CatItemComponent } from './cat-item/cat-item.component';
import { CatDetailViewComponent } from './cat-detail-view/cat-detail-view.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    CatsListComponent,
    CatItemComponent,
    CatDetailViewComponent
  ],
  imports: [
    CommonModule,
    AsyncPipe,
    BrowserModule,
    RouterLink,
  ],
  providers: [],
  exports: [
    CatsListComponent,
    CatItemComponent,
    CatDetailViewComponent
  ]
})
export class CatsModule { }
