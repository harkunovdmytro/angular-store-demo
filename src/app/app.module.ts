import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CatsStoreReducer } from './store/reducers.store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CatsRequestService } from './shared/services/cats-request.service';
import { CatsEffects } from './store/effects.store';
import { CatsModule } from './cats/cats.module';
import { HttpClientModule } from '@angular/common/http';
import { CatStoreKey } from './store/selectors.store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ [CatStoreKey]: CatsStoreReducer }, {}),
    EffectsModule.forRoot([CatsEffects]),
    CatsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [CatsRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
