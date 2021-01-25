import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyComponentComponent } from './my-component/my-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

import { MyMaterialModule } from  './material.module';

import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    RegistrationComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
     RouterModule.forRoot([
      // { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'home', component: MyComponentComponent },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
       
    
    ]),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { MyMaterialModule } from  './material.module';
 
// @NgModule({
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     MyMaterialModule,
 
//   ],
// })