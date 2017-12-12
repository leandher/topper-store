import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UsuarioComponent = new UsuarioComponent();
  mensagem: string = "";

  constructor(private service: UsuarioService, private router: Router) {  }

  ngOnInit() {
  }

  login() {
    console.log(this.user);
    this.service.login(this.user)
      .subscribe(res => {
        this.user = res;
        Cookie.set('idUser', this.user.idUsuario.toString());
        Cookie.set('idRole', this.user.userRole.toString());
        if (this.user.userRole == 'ADMIN') {
          this.router.navigate(['/dashboard']);
        } else if (this.user.userRole == 'USER') {
          this.router.navigate(['/home']);
        }
      }, err => {
        if(err.status == 401 || err.status == 400){
          this.mensagem = "Login ou senha incorretos!";
          setInterval(() => {
            this.mensagem = "";
          }, 1000 * 5);
        }
      });
  }
}
