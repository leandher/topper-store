import { Component, OnInit } from '@angular/core';
import { ProdutoComponent } from '../produto.component';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {
  categorias = [
    {id: 1, name: "CELULARES"},
    {id: 2, name: "COMPUTADORES"},
    {id: 3, name: "ACESSORIOS"},
    {id: 4, name: "OUTROS"}
  ];
  produto: ProdutoComponent = new ProdutoComponent;
  mensagem: string = "";
  style: string = "";
  constructor(private service: ProdutoService, private router: ActivatedRoute, private routers: Router) { }

  ngOnInit() {
  }
  cadastrar() {
    console.log(this.produto);

    this.service.cadastrar(this.produto).subscribe(res => {
      this.mensagem = "Salvo com sucesso!";
      this.style = 'success';
      setInterval(() => {
        this.mensagem = "";
        this.routers.navigate(['/produtos']);
      }, 1000 * 3);
    }, err => {
      this.mensagem = "Erro ao salvar!";
      this.style = 'danger';
      setInterval(() => {
        this.mensagem = "";
      }, 1000 * 5);
    })
  }
}
