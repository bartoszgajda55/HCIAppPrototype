import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {LogoutComponent} from "../../components/logout/logout";
import {NgForm} from "@angular/forms";
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  instagram: boolean = false;
  facebook: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private loadingCtrl: LoadingController) {
  }

  onShowOption(event: MouseEvent): void {
    let popover = this.popoverCtrl.create(LogoutComponent);
    popover.present({ev: event});
  }

  onSelectImage(): void {
  }

  onAddPost(form: NgForm): void {

    let loading = this.loadingCtrl.create({
      content: 'Adding post...',
      duration: 1000
    });
    loading.present();
    setTimeout(() => {
      this.navCtrl.parent.select(0);
    }, 1000);
  }

}
