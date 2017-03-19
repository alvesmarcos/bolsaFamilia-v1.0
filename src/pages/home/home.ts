import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';
import { ModalNis }  from '../modal-nis/modal-nis';
import { InteratividadePage } from '../interatividade/interatividade';
import { CalendarioPage } from '../calendario/calendario';
import { AtendimentoPage } from '../atendimento/atendimento';
import { SobrePage } from '../sobre/sobre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isValid: boolean = false;

  constructor(private _navCtrl: NavController, private _modalCtrl: ModalController,
              private _authService: AuthService) { }

  inputNis(){
    let modal = this._modalCtrl.create(ModalNis);
    modal.onDidDismiss(data => {
      this.isValid = this._authService.validate(data);
    });
    modal.present();
  }
  pushAtendimento() {
    this._navCtrl.push(AtendimentoPage);
  }
  pushCalendario() {
    this._navCtrl.push(CalendarioPage);
  }
  pushInteratividade() {
    this._navCtrl.push(InteratividadePage);
  }
  pushSobre(){
    this._navCtrl.push(SobrePage);
  }
}
