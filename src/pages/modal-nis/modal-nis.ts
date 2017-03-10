import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-nis',
  templateUrl: 'modal-nis.html'
})

export class ModalNis {
  constructor(public viewCtrl: ViewController){ }

  dismiss(data) {
   this.viewCtrl.dismiss(data);
  }
}
