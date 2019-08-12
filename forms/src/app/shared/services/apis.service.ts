import { HTTP_BIN } from './../../app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) { }

  postForm(usuario: string) {
    console.log(usuario);
    return this.http.post(HTTP_BIN, JSON.stringify(usuario));
  }
}
