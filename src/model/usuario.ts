import { Parcela } from './parcela';
import { Mensagem } from './mensagem';

export class Usuario {
  private _nome: string;
  private _nis: string;
  private _mensagem: Mensagem[];
  private _parcela: Parcela[];

  constructor(nome: string, nis: string, mensagem: Mensagem[], parcela: Parcela[]) {
    this._nome = nome;
    this._nis = nis;
    this._mensagem = mensagem;
    this._parcela = parcela;
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

  get parcela(): Parcela[] {
    return this._parcela;
  }

  add1parcela(parcela: Parcela): void {
    this._parcela.push(parcela);
  }

  add1mensagem(mensagem: Mensagem): void {
    this._mensagem.push(mensagem);
  }
}
