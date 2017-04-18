export class Message {
  private _title: string;
  private _content: string;
  private _date: string;
  private _wasRead: boolean;

  constructor() {
    this._title = 'title';
    this._content = 'content';
    this._date = 'date';
    this._wasRead = false;
  }

  get title(): string {
    return this._title;
  }

  get content(): string {
    return this._content;
  }

  get date(): string {
    return this._date;
  }

  get wasRead(): boolean {
    return this._wasRead;
  }

  set title(title: string) {
    this._title = title;
  }

  set content(content: string) {
    this._content = content;
  }

  set date(date: string) {
    this._date = date;
  }

  set wasRead(wasRead: boolean) {
    this._wasRead = wasRead;
  }
}
