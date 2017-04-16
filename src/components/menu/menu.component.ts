import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'menu-component',
  templateUrl: 'menu.component.html'
})

export class MenuComponent {
  @ViewChild(Nav) nav: Nav;

  constructor(private _authService: AuthService){ }
}
