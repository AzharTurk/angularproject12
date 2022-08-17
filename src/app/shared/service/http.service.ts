import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) { }

  get(url: string): Observable<any> {
    return this._httpClient.get(url);
  }

  post(url: string, model: any): Observable<any> {
    const body = JSON.stringify(model);
    let httpHeader = new HttpHeaders()
      .set('Content-Type', 'application/json');

    let option = {
      headers: httpHeader
    };

    return this._httpClient.post(url, body, option);
  }

  put(url: string, id: number, model: any): Observable<any> {
    const body = JSON.stringify(model);
    let httpHeader = new HttpHeaders()
      .set('Content-Type', 'application/json');

    let option = {
      headers: httpHeader
    };

    return this._httpClient.put(url + id, body, option);
  }

  delete(url: string, id: number): Observable<any> {
    return this._httpClient.delete(url + id);
  }


}
