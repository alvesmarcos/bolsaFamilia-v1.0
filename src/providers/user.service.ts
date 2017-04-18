import { Injectable } from '@angular/core';

import { User } from '../model/user';

@Injectable()
export class UserService {
  private _user: User;
  private _existsUser: boolean;

  constructor(){ 
    this._user = new User();
    this._existsUser = false;
  }

  // OBS: Implementação provisória
  validate(nis:string): boolean {
    if(nis=='01234567891'){
      this._user.name = 'Marcos Alves da Silva';
      this._user.nis = nis;
      this._existsUser = true;
    } else {
      this._existsUser = false;
    }
    return this._existsUser;
  }

  get user(): User {
    if(this._existsUser)
      return this._user;
    else
      return null;
  }
}
