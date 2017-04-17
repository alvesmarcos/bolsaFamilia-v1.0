export const enum ExtratoStatus {
  BLOQUEADA,
  LIBERADA,
  PAGA
}

export class Extrato {
  private _mes: string;
  private _status: ExtratoStatus;

  constructor() {
    this._mes = 'mes';
    this._status = ExtratoStatus.BLOQUEADA;
  }

  get mes(): string {
    return this._mes;
  }

  get status(): ExtratoStatus {
    return this._status;
  }

  set mes(mes: string) {
    this._mes = mes;
  }

  set status(status: ExtratoStatus) {
    this._status = status;
  }
}
