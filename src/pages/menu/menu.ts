import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

@Component({
  selector: 'side-menu',
  templateUrl: 'menu.html'
})

export class SideMenu {
  @ViewChild(Nav) nav: Nav;
  public nome: string = "Maria dos Santos Silva";
  public nis: number = 9;
}
