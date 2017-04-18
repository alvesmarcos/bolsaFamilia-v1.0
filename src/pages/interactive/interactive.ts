import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

@Component({
  selector: 'page-interactive',
  templateUrl: 'interactive.html'
})

export class InteractivePage {
  private _content: string;

  constructor(private _navCtrl: NavController){ }

  qrCodeDecode() {
    BarcodeScanner.scan().then((barcodeData) => {
       this._content = barcodeData.text;
      }, (err) => {
        alert("Erro");
      });
  }
}
