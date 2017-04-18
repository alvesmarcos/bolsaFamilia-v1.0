import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'nis-modal',
  templateUrl: 'nis.modal.html'
})
export class ModalInputNIS {
  constructor(private _viewCtrl: ViewController) { }

  dismiss(data) {
    this._viewCtrl.dismiss(data);
  }
}