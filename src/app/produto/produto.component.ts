import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  idProduto: number;
  nome: string;
  descricao: string;
  valor: number;
  estoque: number;
  categoria: string;
  foto: string;
  quantidade: number;
  valorTotal: number;

  constructor() { }

  ngOnInit() {
  }

}
