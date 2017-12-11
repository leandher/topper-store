import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-painel',
  templateUrl: './home-painel.component.html',
  styleUrls: ['./home-painel.component.css']
})
export class HomePainelComponent implements OnInit {

  pedidos: any[] = [];
  constructor() { }

  ngOnInit() {
    this.pedidos.push({numero: 123123, data: '12/11/2017', status: 'Enviado'});
    this.pedidos.push({numero: 483912, data: '10/21/2017', status: 'Entregue'});
  }

}
