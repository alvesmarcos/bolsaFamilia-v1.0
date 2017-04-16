import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-nis',
  templateUrl: 'modal-nis.html'
})

export class ModalNis {
  constructor(private _viewCtrl: ViewController) { }

  dismiss(data): void {
   this._viewCtrl.dismiss(data);
  }
}
