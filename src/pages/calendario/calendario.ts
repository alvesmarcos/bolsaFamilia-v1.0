import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CalendarService } from '../../providers/calendar.service';

@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html'
})
export class CalendarioPage {
  private _date: string[];
  private _digit: number;
  private _flag: boolean;

  constructor(private _navCtrl: NavController, private _navParams: NavParams,
              private _calendarService: CalendarService) {
    this._digit = this._navParams.get('digit');

    if(this._digit == -1) {
      this._flag = true;
    } else {
      this._flag = false;
      this._date = this._calendarService.payDate(Number(this._digit));
    }
  }

  public getPayDate(value): void {
    this._date = this._calendarService.payDate(Number(value));
    this._digit = value;
  }
}
