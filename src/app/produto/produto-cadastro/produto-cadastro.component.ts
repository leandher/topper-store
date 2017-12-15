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
  produto: ProdutoComponent = new ProdutoComponent;
  mensagem: string = "";
  style: string = "";
  constructor(private service: ProdutoService, private router: ActivatedRoute) { }

  ngOnInit() {
  }
  cadastrar() {
    console.log(this.produto);

    this.service.cadastrar(this.produto).subscribe(res => {
      this.mensagem = "Salvo com sucesso!";
      this.style = 'success';
      setInterval(() => {
        this.mensagem = "";
      }, 1000 * 3);
    }, err => {
      this.mensagem = "E-mail e/ou CPF já cadastrados!";
      this.style = 'danger';
      setInterval(() => {
        this.mensagem = "";
      }, 1000 * 5);
    })
  }
}
