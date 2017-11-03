import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {LogoutComponent} from "../../components/logout/logout";
import {NgForm} from "@angular/forms";
import {Post} from "../../models/post.model";
import {PostsProvider} from "../../providers/posts/posts";

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
              private loadingCtrl: LoadingController,
              private postProvider: PostsProvider) {
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
      this.postProvider.addNewPost(this.createNewPostFromObject(form.value));
      this.navCtrl.parent.select(0);
    }, 1000);
  }

  private createNewPostFromObject(object: any): Post {
    return new Post(0, object.title, object. description, "assets/post-images/img2.png", "John Doe");
  }

}
