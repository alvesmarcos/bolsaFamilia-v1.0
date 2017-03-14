import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
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
  isValid: boolean = true;

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

  inputNis(){
    let modal = this.modalCtrl.create(ModalNis);
    modal.onDidDismiss(data => {
      if(data==null)
        this.isValid = true;
      alert(data);
    });
    modal.present();
  }
  pushAtendimento() {
    this.navCtrl.push(AtendimentoPage);
  }
  pushCalendario() {
    this.navCtrl.push(CalendarioPage);
  }
  pushInteratividade() {
    this.navCtrl.push(InteratividadePage);
  }
  pushSobre(){
    this.navCtrl.push(SobrePage);
  }
}
