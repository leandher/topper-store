import { Component} from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  idUsuario: Number;
  name: string;
  password: string;
  cpf: string;
  email: string;
  userRole: string;
  endereco = {
    rua: String,
    numero: String,
    cep: String,
    complemento: String
  };
}
