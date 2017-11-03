import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {LogoutComponent} from "../../components/logout/logout";
import {PostsProvider} from "../../providers/posts/posts";
import {Post} from "../../models/post.model";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  posts: Post[];
  searchTerm: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private postsProvider: PostsProvider) {
  }

  ionViewWillEnter() {
    this.intializePosts();
  }

  onShowOption(event: MouseEvent): void {
    let popover = this.popoverCtrl.create(LogoutComponent);
    popover.present({ev: event});
  }

  filterPosts(ev: any): void {
    this.intializePosts();

    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.posts = this.posts.filter((item) => {
        return (item.title.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  private intializePosts(): void {
    this.posts = this.postsProvider.getPosts();
  }
}
