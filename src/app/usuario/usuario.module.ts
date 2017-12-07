import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { UsuarioService } from './usuario.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsuarioComponent, ProfileComponent],
  providers: [ UsuarioService ]
})
export class UsuarioModule { }
