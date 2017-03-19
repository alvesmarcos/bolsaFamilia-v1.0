import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'side-menu',
  templateUrl: 'menu.html'
})

export class SideMenu {
  @ViewChild(Nav) nav: Nav;
  
  constructor(private _authService: AuthService){ }
}
