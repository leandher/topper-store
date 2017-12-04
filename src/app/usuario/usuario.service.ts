import { UsuarioComponent } from './usuario.component';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  http: Http;
  url: String = 'http://localhost:8080/api/';

  constructor(http: Http) {
    this.http = http;
  }

  lista(): Observable<UsuarioComponent[]> {
    return this.http.get(this.url + "usuarios")
      .map(res => res.json());
  }

  login(usuario: UsuarioComponent): Observable<UsuarioComponent> {
    return this.http.post(this.url + "login", JSON.stringify(usuario))
    .map(res => res.json());
  }
}
