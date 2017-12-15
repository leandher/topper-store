import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';
import { ProdutoService } from './produto.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CurrencyMaskModule
  ],
  declarations: [
    ProdutoComponent,
    ProdutoCadastroComponent,
    ProdutoListagemComponent
  ],
  providers: [ProdutoService]
})
export class ProdutoModule { }
