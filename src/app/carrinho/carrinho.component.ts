import { Component, OnInit } from '@angular/core';
import { Carrinho } from './carrinho';
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoService } from '../produto/produto.service';
import * as moment from 'moment';
import { UsuarioComponent } from '../usuario/usuario.component';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho = Carrinho.getInstance();
  items: ProdutoComponent[] = this.carrinho.getItens();
  pedido: any;

  constructor(private service: ProdutoService) { }

  ngOnInit() {
    console.log(this.items);
    console.log(this.carrinho.itens);
  }

  finalizarPedido() {
    if (confirm('Você deseja finalizar o pedido?')) {
      let itens: any[] = [];

      this.items.forEach(item => {
        let i = {
          produto: item,
          quantidade: item.quantidade,
          valorTotal: item.valorTotal
        };

        itens.push(i);
      });

      this.pedido = {
        data: moment(),
        usuario: {
          idUsuario: Number(Cookie.get('idUser'))
        },
        status: 'ENVIADO',
        itens: itens
      };
      console.log(this.pedido);
      this.service.salvarPedido(this.pedido).subscribe(res => {
        console.log('Deu bom!');
      }, err => {
        console.log('Deu ruim!');
      });
    }
  }
}
