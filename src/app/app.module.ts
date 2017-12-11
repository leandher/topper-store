import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UsuarioModule } from './usuario/usuario.module';
import { HttpClient } from './http-client';
import { ProdutoComponent } from './produto/produto.component';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import * as moment from 'moment'; 
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ProdutoComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    UsuarioModule,
    SharedModule,
    DashboardModule,
    HomeModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }