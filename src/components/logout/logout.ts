import { Component } from '@angular/core';
import {NavController, ViewController} from "ionic-angular";
import {LoginPage} from "../../pages/login/login";

@Component({
  selector: 'logout',
  templateUrl: 'logout.html'
})
export class LogoutComponent {

  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController) {
  }

  onLogout(): void {
    this.viewCtrl.dismiss().then(() => {
      this.navCtrl.setRoot(LoginPage, {'loggedOut': true});
    });
  }

}
