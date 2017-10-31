import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {TabsPage} from "../tabs/tabs";
import {RegisterPage} from "../register/register";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLogin(form: NgForm): void {
    this.navCtrl.setRoot(TabsPage);
  }

  onGoToRegister(): void {
    this.navCtrl.push(RegisterPage);
  }
}
