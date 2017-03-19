import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private _nome: string;
  private _nis: string;

  validate(nis:string){
    if(nis=='01234567891'){
      this._nome = 'Marcos Alves da Silva';
      this._nis = nis;
      return true;
    } else {
      return false;
    }
  }
  getNome(){
    return this._nome;
  }
  getNis(){
    return this._nis;
  }
}
