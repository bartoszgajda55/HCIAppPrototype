import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ToastController} from 'ionic-angular';
import {LogoutComponent} from "../../components/logout/logout";
import {User} from "../../models/user.model";
import {UserProvider} from "../../providers/user/user";
import {NgForm} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  user: User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private userProvider: UserProvider,
              private toastCtrl: ToastController) {
    this.user = this.userProvider.getUser();
  }

  onShowOption(event: MouseEvent): void {
    let popover = this.popoverCtrl.create(LogoutComponent);
    popover.present({ev: event});
  }

  onChangePassword(form: NgForm): void {
    let toast = this.toastCtrl.create({
      message: "Password Changed!",
      duration: 2000
    });
    toast.present();
    form.reset();
  }
}
