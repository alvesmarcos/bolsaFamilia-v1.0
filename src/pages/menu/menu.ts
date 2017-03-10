import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

@Component({
  selector: 'side-menu',
  templateUrl: 'menu.html'
})

export class SideMenu {
  @ViewChild(Nav) nav: Nav;
  private nome: string;
  private nis: string;

  constructor(){
    this.nome = "Maria dos Santos Silva";
    this.nis = "NIS 9";
  }
}
