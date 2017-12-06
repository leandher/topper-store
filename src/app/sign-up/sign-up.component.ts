import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: UsuarioComponent = new UsuarioComponent;
  constructor(private service: UsuarioService) { }

  ngOnInit() {
  }

  cadastrar(){
    console.log(this.user);

    this.service.cadastrar(this.user).subscribe(res=>{
      
    }, err => {
      console.log(err);
    })
  }
}
