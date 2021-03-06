import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Post} from "../../models/post.model";
import Posts from '../posts.data';

@Injectable()
export class PostsProvider {
  posts: Post[] = Posts;

  constructor(public http: Http) {
  }

  getPosts(): Post[] {
    return this.posts.slice();
  }

  addNewPost(post: Post): void {
    this.posts.push(post);
  }

}
