import { ParcelaStatus } from '../util/parcelaStatus';

export class Parcela {
  private _mes: string;
  private _status: ParcelaStatus;

  constructor(mes: string, status: ParcelaStatus) {
    this._mes = mes;
    this._status = status;
  }

  public get mes(): string {
    return this._mes;
  }

  public get status(): string {
    return this._status;
  }
}
