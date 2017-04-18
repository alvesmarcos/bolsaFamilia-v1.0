import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';

import { ModalInputNIS } from './modal/nis.modal';
import { InteractivePage } from '../interactive/interactive';
import { CalendarPage } from '../calendar/calendar';
import { AttendancePage } from '../attendance/attendance';
import { AboutPage } from '../about/about';
import { OthersPage } from '../others/others';
import { MessagesPage } from '../messages/messages';
import { StatementPage } from '../statement/statement';

import { UserService } from '../../providers/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private _isValid: boolean = false;

  constructor(private _navCtrl: NavController, private _modalCtrl: ModalController,
              private _toastCtrl: ToastController, private _userService: UserService) { }

  inputNIS() {
    let modal = this._modalCtrl.create(ModalInputNIS);
    modal.onDidDismiss(data => {
      this._isValid = this._userService.validate(data);
    });
    modal.present();
  }

  presentToast() {
    let toast = this._toastCtrl.create({
      message: 'Para acessar essa opção insira seu NIS',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  pushAttendance() {
    this._navCtrl.push(AttendancePage);
  }

  pushCalendar(value) {
    this._navCtrl.push(CalendarPage, {digit: value});
  }

  pushInteractive() {
    this._navCtrl.push(InteractivePage);
  }

  pushAbout() {
    this._navCtrl.push(AboutPage);
  }

  pushOthers() {
    this._navCtrl.push(OthersPage);
  }

  pushMessages() {
    this._navCtrl.push(MessagesPage);
  }

  pushStatement() {
    this._navCtrl.push(StatementPage);
  }

  get isValid(): boolean {
    return this._isValid;
  }
}
