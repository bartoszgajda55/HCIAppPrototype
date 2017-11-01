import { Component } from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';
import {LogoutComponent} from "../../components/logout/logout";
import {PostsProvider} from "../../providers/posts/posts";
import {Post} from "../../models/post.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: Post[];

  constructor(public navCtrl: NavController,
              private popoverCtrl: PopoverController,
              private postsProvider: PostsProvider) {
  }

  ionViewDidEnter(): void {
    this.posts = this.postsProvider.getPosts();
  }

  onShowOption(event: MouseEvent): void {
    let popover = this.popoverCtrl.create(LogoutComponent);
    popover.present({ev: event});
  }
}
