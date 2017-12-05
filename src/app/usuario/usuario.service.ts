import { UsuarioComponent } from './usuario.component';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  http: Http;
  headers: Headers;
  url: string = 'api/usuarios';

  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    //this.headers.append('Authorization', 'Basic cbd942d3-e33d-4163-84ab-d37f26e91d9c');
  }

  lista(): Observable<UsuarioComponent[]> {
    return this.http.get(this.url + "/")
      .map((res: Response) => res.json().data);
  }

  login(usuario: UsuarioComponent): Observable<UsuarioComponent> {
    return this.http
    .post(this.url + '/login', usuario, { headers: this.headers })
    .map(res => res.json());
  }

  cadastrar(usuario: UsuarioComponent): Observable<Response> {
    return this.http
    .post(this.url + '/', usuario, { headers: this.headers })
    .map(res => res);
  }
}
