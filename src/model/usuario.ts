import { Extrato } from './extrato';
import { Mensagem } from './mensagem';

export class Usuario {
  private _nome: string;
  private _nis: string;
  private _mensagem: Mensagem[];
  private _extrato: Extrato[];
  
  constructor() {
    this._nome = 'nome';
    this._nis = 'nis';
    this._mensagem = [];
    this._extrato = [];
  }

  get nome(): string {
    return this._nome;
  }

  get nis(): string {
    return this._nis;
  }

  get mensagem(): Mensagem[] {
    return this._mensagem;
  }

  get extrato(): Extrato[] {
    return this._extrato;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  set nis(nis: string) {
    this._nis = nis;
  }

  add1parcela(extrato: Extrato) {
    this._extrato.push(extrato);
  }

  add1mensagem(mensagem: Mensagem) {
    this._mensagem.push(mensagem);
  }
}
