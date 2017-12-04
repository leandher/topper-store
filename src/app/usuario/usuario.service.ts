import { UsuarioComponent } from './usuario.component';
import { HttpClient } from '../http-client';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  http: HttpClient;
  url: string = 'localhost:8080/api/'

  constructor(http: HttpClient) {
    this.http = http;
  }

  lista(): Observable<UsuarioComponent[]> {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  login(usuario: UsuarioComponent): Observable<UsuarioComponent> {
    return this.http.post(this.url + "login", JSON.stringify(usuario))
    .map(res => res.json());
  }
}
