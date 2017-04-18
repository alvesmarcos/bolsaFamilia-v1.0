import { Statement } from './statement';
import { Message } from './message';

export class User {
  private _name: string;
  private _nis: string;
  private _message: Message[];
  private _statement: Statement[];
  
  constructor() {
    this._name = 'name';
    this._nis = 'nis';
    this._message = [];
    this._statement = [];
  }

  get name(): string {
    return this._name;
  }

  get nis(): string {
    return this._nis;
  }

  get message(): Message[] {
    return this._message;
  }

  get statement(): Statement[] {
    return this._statement;
  }

  set name(name: string) {
    this._name = name;
  }

  set nis(nis: string) {
    this._nis = nis;
  }

  addStatement(statement: Statement) {
    this._statement.push(statement);
  }

  addMessage(message: Message) {
    this._message.push(message);
  }
}
