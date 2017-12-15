import { Component, OnInit } from '@angular/core';
import { Carrinho } from './carrinho';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho = Carrinho.getInstance();
  items: ProdutoComponent[] = this.carrinho.getItens();
  
  constructor() { }

  ngOnInit() {
    console.log(this.items);
    console.log(this.carrinho.itens);
  }

}
