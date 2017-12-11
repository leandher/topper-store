import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: UsuarioComponent = new UsuarioComponent;
  mensagem: string = "";
  style: string = "";

  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  cadastrar() {
    console.log(this.user);

    this.service.cadastrar(this.user).subscribe(res => {
      this.mensagem = "Salvo com sucesso!";
      this.style = 'success';
      setInterval(() => {
        this.mensagem = "";
        this.router.navigate(['/login']);
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
