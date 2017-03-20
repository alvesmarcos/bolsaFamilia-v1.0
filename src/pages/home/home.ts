import { Component } from '@angular/core';

import { NavController, ModalController, ToastController } from 'ionic-angular';

import { AuthService } from '../../providers/auth.service';
import { ModalNis }  from '../modal-nis/modal-nis';
import { InteratividadePage } from '../interatividade/interatividade';
import { CalendarioPage } from '../calendario/calendario';
import { AtendimentoPage } from '../atendimento/atendimento';
import { SobrePage } from '../sobre/sobre';
import { OutrosProgramasPage } from '../outros-programas/outros-programas';
import { MensagensPage } from '../mensagens/mensagens';
import { ExtratoPage } from '../extrato/extrato';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isValid: boolean = false;

  constructor(private _navCtrl: NavController, private _modalCtrl: ModalController,
              private _authService: AuthService, private _toastCtrl: ToastController) { }

  inputNis(){
    let modal = this._modalCtrl.create(ModalNis);
    modal.onDidDismiss(data => {
      this.isValid = this._authService.validate(data);
    });
    modal.present();
  }

  presentToast(){
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
  pushCalendario(bool) {
    this._navCtrl.push(CalendarioPage, {flag: bool});
  }
  pushInteratividade() {
    if(this.isValid)
      this._navCtrl.push(InteratividadePage);
    else
      this.presentToast();
  }
  pushSobre(){
    this._navCtrl.push(SobrePage);
  }
  pushOutrosProgramas(){
    this._navCtrl.push(OutrosProgramasPage);
  }
  pushMensagens(){
    this._navCtrl.push(MensagensPage);
  }
  pushExtrato(){
    this._navCtrl.push(ExtratoPage);
  }
}
