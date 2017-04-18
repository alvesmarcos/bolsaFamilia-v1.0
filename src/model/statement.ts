export const enum StatementStatus {
  BLOCKED,
  RELEASED,
  PAID
}

export class Statement {
  private _month: string;
  private _status: StatementStatus;

  constructor() {
    this._month = 'month';
    this._status = StatementStatus.BLOCKED;
  }

  get month(): string {
    return this._month;
  }

  get status(): StatementStatus {
    return this._status;
  }

  set month(month: string) {
    this._month = month;
  }

  set status(status: StatementStatus) {
    this._status = status;
  }
}
