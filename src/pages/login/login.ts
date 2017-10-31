import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {TabsPage} from "../tabs/tabs";
import {RegisterPage} from "../register/register";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private loadingCtrl: LoadingController) {
  }

  onLogin(form: NgForm): void {
    let loading = this.loadingCtrl.create({
      content: 'Logging you in...',
      duration: 1000
    });
    loading.present();
    setTimeout(() => {
      this.navCtrl.setRoot(TabsPage);
    }, 1000);
  }

  onGoToRegister(): void {
    this.navCtrl.push(RegisterPage);
  }
}
