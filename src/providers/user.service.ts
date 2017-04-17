import { Injectable } from '@angular/core';

import { Usuario } from '../model/usuario';

@Injectable()
export class UserService {
  private _usuario: Usuario;
  private _existsUser: boolean;

  constructor(){ 
    this._usuario = new Usuario();
    this._existsUser = false;
  }

  // OBS: Implementação provisória
  validate(nis:string): boolean {
    if(nis=='01234567891'){
      this._usuario.nome = 'Marcos Alves da Silva';
      this._usuario.nis = nis;
      this._existsUser = true;
    } else {
      this._existsUser = false;
    }
    return this._existsUser;
  }

  get usuario(): Usuario {
    if(this._existsUser)
      return this._usuario;
    else
      return null;
  }
}
