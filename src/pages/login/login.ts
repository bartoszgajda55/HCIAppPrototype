import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
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
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {
  }

  ionViewWillEnter() {
    if (this.navParams.get('loggedOut')) {
      let toast = this.toastCtrl.create({
        message: 'Logout Successful !',
        duration: 2000
      });
      toast.present();
    }
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
