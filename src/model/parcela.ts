import { ParcelaStatus } from '../util/parcelaStatus';

export class Parcela {
  private _mes: string;
  private _status: ParcelaStatus;

  constructor(mes: string, status: ParcelaStatus) {
    this._mes = mes;
    this._status = status;
  }

  get mes(): string {
    return this._mes;
  }

  get status(): ParcelaStatus {
    return this._status;
  }
}
