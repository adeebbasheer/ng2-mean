import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from 'ui-router-ng2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { provideAuth } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { DirectivesModule } from '../components/directives.module';
import { AccountModule } from './account/account.module';
import { MainModule } from './main/main.module';

let providers = [provideAuth({
  // Allow using AuthHttp while not logged in
  noJwtError: true
})];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UIRouterModule.forRoot(),
    NgbModule.forRoot(),
    AccountModule,
    MainModule,
    DirectivesModule,
  ],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
