import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {TabsPage} from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private loadingCtrl: LoadingController) {
  }

  onRegister(form: NgForm): void {
    let loading = this.loadingCtrl.create({
      content: 'Registering...',
      duration: 1000
    });
    loading.present();
    setTimeout(() => {
      this.navCtrl.setRoot(TabsPage);
    }, 1000);
  }
}
