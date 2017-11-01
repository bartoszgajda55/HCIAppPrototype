import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Post} from "../../models/post.model";
import Posts from '../data';

@Injectable()
export class PostsProvider {
  posts: Post[] = Posts;

  constructor(public http: Http) {
  }

  getPosts(): Post[] {
    return this.posts;
  }

}
