import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Post} from "../../models/post.model";

@Injectable()
export class PostsProvider {

  constructor(public http: Http) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get('assets/data/posts.json')
      .map(value => value.json());
  }

}
