import { ProdutoComponent } from './produto.component';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoService {
  http: Http;
  headers: Headers;
  url: string = 'api/produtos';

  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    this.headers.append('Authorization', 'Basic cbd942d3-e33d-4163-84ab-d37f26e91d9c');
  }

  lista(): Observable<ProdutoComponent[]> {
    return this.http.get(this.url + "/", { headers: this.headers })
      .map((res: Response) => res.json());
  }

  cadastrar(produto: ProdutoComponent): Observable<Response> {
    return this.http
      .post(this.url + '/', produto, { headers: this.headers })
      .map(res => res);
  }

  salvarPedido(pedido: any): Observable<Response> {
    return this.http
      .post('api/pedidos' + '/', pedido, { headers: this.headers })
      .map(res => res);
  }
}
