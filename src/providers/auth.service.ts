import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private _nome: string;
  private _nis: string;

  constructor(){
    this._nome = 'Menu';
  }

  // OBS: Implementação provisória
  public validate(nis:string): boolean {
    if(nis=='01234567891'){
      this._nome = 'Marcos Alves da Silva';
      this._nis = nis;
      return true;
    } else {
      return false;
    }
  }

  public get nome(): string {
    return this._nome;
  }

  public get nis(): string {
    return this._nis;
  }
}
