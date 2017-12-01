import { Component} from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  id: Number;
  name: String;
  password: String;
  cpf: String;
  email: String;
  endereco = {
    rua: String,
    numero: String,
    cep: String,
    complemento: String
  };
}
