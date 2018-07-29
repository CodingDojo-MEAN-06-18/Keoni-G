import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';

import * as fromAuth from './auth';
import * as fromMarketplace from './marketplace';
import * as fromShared from './shared';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ...fromAuth.declarations,
    ...fromMarketplace.declarations,
    ...fromShared.declarations,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CookieModule.forRoot(),
  ],
  providers: [
    ...fromAuth.providers,
    ...fromShared.providers,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
