export class Mensagem {
  private _titulo: string;
  private _conteudo: string;
  private _data: string;
  private _lida: boolean;

  constructor() {
    this._titulo = 'titulo';
    this._conteudo = 'conteudo';
    this._data = 'data';
    this._lida = false;
  }

  get titulo(): string {
    return this._titulo;
  }

  get conteudo(): string {
    return this._conteudo;
  }

  get data(): string {
    return this._data;
  }

  get lida(): boolean {
    return this._lida;
  }

  set titulo(titulo: string) {
    this._titulo = titulo;
  }

  set conteudo(conteudo: string) {
    this._conteudo = conteudo;
  }

  set data(data: string) {
    this._data = data;
  }

  set lida(lida: boolean) {
    this._lida = lida;
  }
}
