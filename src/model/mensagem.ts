export class Mensagem {
  private _titulo: string;
  private _conteudo: string;
  private _data: string;
  private _lida: boolean;

  constructor(titulo: string, conteudo: string, data:string, lida: boolean) {
    this._titulo = titulo;
    this._conteudo = conteudo;
    this._data = data;
    this._lida = lida;
  }

  public get titulo(): string {
    return this._titulo;
  }

  public get conteudo(): string {
    return this._conteudo;
  }

  public get data(): string {
    return this._data;
  }

  public get lida(): boolean {
    return this._lida;
  }
}
