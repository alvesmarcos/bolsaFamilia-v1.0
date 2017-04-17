import { Component } from '@angular/core';

import { NavController, ModalController, ToastController } from 'ionic-angular';

import { ModalNis }  from '../modal-nis/modal-nis';
import { InteratividadePage } from '../interatividade/interatividade';
import { CalendarioPage } from '../calendario/calendario';
import { AtendimentoPage } from '../atendimento/atendimento';
import { SobrePage } from '../sobre/sobre';
import { OutrosProgramasPage } from '../outros-programas/outros-programas';
import { MensagensPage } from '../mensagens/mensagens';
import { ExtratoPage } from '../extrato/extrato';

import { UserService } from '../../providers/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private _isValid: boolean = false;

  constructor(private _navCtrl: NavController, private _modalCtrl: ModalController,
              private _toastCtrl: ToastController, private _userService: UserService) { }

  inputNis() {
    let modal = this._modalCtrl.create(ModalNis);
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

  pushAtendimento() {
    this._navCtrl.push(AtendimentoPage);
  }

  pushCalendario(value) {
    this._navCtrl.push(CalendarioPage, {digit: value});
  }

  pushInteratividade() {
    this._navCtrl.push(InteratividadePage);
  }

  pushSobre() {
    this._navCtrl.push(SobrePage);
  }

  pushOutrosProgramas() {
    this._navCtrl.push(OutrosProgramasPage);
  }

  pushMensagens() {
    this._navCtrl.push(MensagensPage);
  }

  pushExtrato() {
    this._navCtrl.push(ExtratoPage);
  }

  get isValid(): boolean {
    return this._isValid;
  }
}
