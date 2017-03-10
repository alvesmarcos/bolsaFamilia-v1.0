import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { ModalNis }  from '../modal-nis/modal-nis';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isValid: boolean = true;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  inputNis(){
    let modal = this.modalCtrl.create(ModalNis);
    modal.onDidDismiss(data => {
      if(data==null)
        this.isValid = true;
      alert(data);
    });
    modal.present();
  }
}
