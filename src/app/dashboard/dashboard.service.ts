import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {
	http: Http;
    headers: Headers;
    url: string = 'api/produtos';

  constructor(http: Http) { 
  	this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    this.headers.append('Authorization', 'Basic cbd942d3-e33d-4163-84ab-d37f26e91d9c');
	}

	listaVendaPorCategoria(): Observable<any[]> {
    return this.http.get(this.url + "/vendaPorCategoria", { headers: this.headers })
      .map((res: Response) => res.json());
  	}

  	listaVendaMensal(): Observable<any[]> {
    return this.http.get(this.url + "/vendaMensal", { headers: this.headers })
      .map((res: Response) => res.json());
  	}

  	listaVendaProduto(): Observable<any[]> {
    return this.http.get(this.url + "/vendaProduto", { headers: this.headers })
      .map((res: Response) => res.json());
  	}
}
