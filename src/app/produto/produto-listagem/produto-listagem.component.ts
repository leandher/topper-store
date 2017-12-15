import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ProdutoComponent } from '../produto.component';
import { Cookie } from 'ng2-cookies';
import { Carrinho } from "../../carrinho/carrinho";
import { Router } from '@angular/router';


@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.css']
})
export class ProdutoListagemComponent implements OnInit {

  produtos: ProdutoComponent[] = [];
  itemMenu: string = "";
  isAdmin: Boolean = false;
  carrinho: Carrinho = Carrinho.getInstance();
  mensagem: string = "";
  constructor(private service: ProdutoService, private router: Router) { }

  ngOnInit() {
    this.service.lista().subscribe(produtos => {
      this.produtos = produtos;
    }, err => {
      console.log(err);
    });

    switch (Cookie.get('idRole')) {
      case "USER":
        this.itemMenu = 'Home';
        this.isAdmin = false;
        break;
      case "ADMIN":
        this.itemMenu = 'Dashboard';
        this.isAdmin = true;
        break;
    }
  }

  onClick(){
    switch (Cookie.get('idRole')) {
      case "USER":
        //Do nothing
        break;
      case "ADMIN":
        //Go to Edit
        break;
    }
  }

  remover(produto: ProdutoComponent){
    this.carrinho.removeItem(produto);
  }

  adicionar(produto: ProdutoComponent){
    this.carrinho.addItem(produto);
    this.mensagem = "Produto adicionado no carrinho!";
    setInterval(() => {
      this.mensagem = "";
    }, 1000 * 5);
  }

  cadastro(){
    this.router.navigate(['dashboard/produtos/cadastro']);
  }
 /*  alterar(id){
    this.router.navigate(['dashboard/produtos/{{id}}']);
  } */
}
