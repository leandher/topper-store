import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UsuarioComponent = new UsuarioComponent();
  service: UsuarioService;

  constructor(service: UsuarioService) {
    this.service = service;
  }

  ngOnInit() {
  }

  login() {
    console.log(this.user);
    this.service.login(this.user)
    .subscribe(res => {
      console.log(res);
    }, err => console.log(err));
  }
}
