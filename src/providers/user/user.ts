import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import User from '../user.data';

@Injectable()
export class UserProvider {

  constructor(public http: Http) {

  }

}
