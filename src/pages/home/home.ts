import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { ModalNis }  from '../modal-nis/modal-nis';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  inputNis(){
    let modal = this.modalCtrl.create(ModalNis);

    modal.present();
  }
}
