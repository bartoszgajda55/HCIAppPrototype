import { Component } from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';
import {LogoutComponent} from "../../components/logout/logout";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private popoverCtrl: PopoverController) {
  }

  onShowOption(event: MouseEvent): void {
    let popover = this.popoverCtrl.create(LogoutComponent);
    popover.present({ev: event});
  }

}
