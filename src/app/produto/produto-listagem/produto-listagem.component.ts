import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ProdutoComponent } from '../produto.component';
import { Cookie } from 'ng2-cookies';


@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.css']
})
export class ProdutoListagemComponent implements OnInit {

  produtos: ProdutoComponent[] = [];
  itemMenu: string = "";
  isAdmin: Boolean = false;
  constructor(private service: ProdutoService) { }

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

  }

  adicionar(produto: ProdutoComponent){
    
  }
}
