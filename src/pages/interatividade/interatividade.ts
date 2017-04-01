import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

@Component({
  selector: 'page-interatividade',
  templateUrl: 'interatividade.html'
})

export class InteratividadePage {
  private _content: string;

  constructor(private _navCtrl: NavController){ }

  public qrCodeDecode(): void {
    BarcodeScanner.scan().then((barcodeData) => {
       this._content = barcodeData.text;
      }, (err) => {
        alert("Erro");
      });
  }
}
