import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AccountPage} from "../pages/account/account";
import {AddPage} from "../pages/add/add";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {SearchPage} from "../pages/search/search";
import {LogoutComponent} from "../components/logout/logout";

const PAGES = [
  MyApp,
  HomePage,
  TabsPage,
  AccountPage,
  AddPage,
  LoginPage,
  RegisterPage,
  SearchPage,
  LogoutComponent
];

@NgModule({
  declarations: PAGES,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: PAGES,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
