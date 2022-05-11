import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SigninComponentComponent } from './signin-component/signin-component.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponentComponent } from './signup-component/signup-component.component';
const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'connexion', component: SigninComponentComponent },
  { path: 'signup', component: SignupComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SigninComponentComponent,
    SignupComponentComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
