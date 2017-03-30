import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CalendarService } from '../../providers/calendar.service';

@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html'
})
export class CalendarioPage {
  private _digit: number;

  constructor(private _navCtrl: NavController, private _navParams: NavParams,
              private _calendarService: CalendarService) {
    this._digit = this._navParams.get('digit');
    
  }
}
