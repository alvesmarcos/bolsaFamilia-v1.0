import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { UserService } from '../../providers/user.service';

@Component({
  selector: 'menu-component',
  templateUrl: 'menu.component.html'
})

export class MenuComponent {
  @ViewChild(Nav) nav: Nav;

  constructor(private _userService: UserService) { 
  }
}
