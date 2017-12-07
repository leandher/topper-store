import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  idProduto: Number;
  nome: string;
  descricao: string;
  valor: Number;
  estoque: Number;
  categoria: string;
  foto: string;

  constructor() { }

  ngOnInit() {
  }

}
