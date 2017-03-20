import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html'
})
export class CalendarioPage {
  flag: boolean;
  constructor(private _navCtrl: NavController, private _navParams: NavParams) {
    this.flag = _navParams.get('flag');
  }
}
