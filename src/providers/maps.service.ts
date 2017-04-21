import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from  'rxjs/Rx';

@Injectable()
export class MapsService {
  private _urlServer: string = '/users';

  constructor(private _http: Http) { }

  getPlaces() {
    return this._http.get(this._urlServer)
                     .map((res: Response) => res.json());
  }

  postPlace(cep: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let body = new URLSearchParams();
    body.append('cep', cep);
    body.append('nis', '0');
    return this._http.post('/users', body, {headers: headers}).map((res: Response) => res.json());
  }
}