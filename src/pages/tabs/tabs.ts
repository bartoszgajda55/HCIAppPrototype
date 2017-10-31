import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {AddPage} from "../add/add";
import {SearchPage} from "../search/search";
import {AccountPage} from "../account/account";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AddPage;
  tab3Root = SearchPage;
  tab4Root = AccountPage;

  constructor() {

  }
}
