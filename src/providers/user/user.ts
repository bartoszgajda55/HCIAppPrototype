import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import Users from '../user.data';
import {User} from "../../models/user.model";

@Injectable()
export class UserProvider {
  user: User = Users[0];

  constructor(public http: Http) {
  }

  getUser(): User {
    return this.user;
  }

}
