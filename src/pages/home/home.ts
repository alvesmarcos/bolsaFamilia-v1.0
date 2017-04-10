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

import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private _isValid: boolean = false;

  constructor(private _navCtrl: NavController, private _modalCtrl: ModalController,
              private _toastCtrl: ToastController, private _authService: AuthService) { }

  public inputNis(): void {
    let modal = this._modalCtrl.create(ModalNis);
    modal.onDidDismiss(data => {
      this._isValid = this._authService.validate(data);
    });
    modal.present();
  }

  public presentToast(): void {
    let toast = this._toastCtrl.create({
      message: 'Para acessar essa opção insira seu NIS',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  public pushAtendimento(): void {
    this._navCtrl.push(AtendimentoPage);
  }

  public pushCalendario(value): void {
    this._navCtrl.push(CalendarioPage, {digit: value});
  }

  public pushInteratividade(): void {
    this._navCtrl.push(InteratividadePage);
  }

  public pushSobre(): void {
    this._navCtrl.push(SobrePage);
  }

  public pushOutrosProgramas(): void {
    this._navCtrl.push(OutrosProgramasPage);
  }

  public pushMensagens(): void {
    this._navCtrl.push(MensagensPage);
  }

  public pushExtrato(): void {
    this._navCtrl.push(ExtratoPage);
  }

  public get isValid(): boolean {
    return this._isValid;
  }
}
