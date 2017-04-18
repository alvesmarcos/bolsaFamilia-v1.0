export class Place {
  private _adress: string;
  private _name: string;
  private _latitude: number;
  private _longitude: number;

  constructor() {
    this._adress = 'adress';
    this._name = 'name';
    this._latitude = 0.0;
    this._longitude = 0.0;
  }

  get adress(): string {
    return this._adress;
  }

  get name(): string {
    return this._name;
  }

  get latitude(): number {
    return this._latitude;
  }

  get longitude(): number {
    return this._longitude;
  }

  set adress(adress: string) {
    this._adress = adress;
  }

  set name(name: string) {
    this._name = name;
  }

  set latitude(latitude: number) {
    this._latitude = latitude;
  }

  set longitude(longitude: number) {
    this._longitude = longitude;
  }
}