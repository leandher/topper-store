import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DashboardPainelComponent } from './dashboard/dashboard-painel/dashboard-painel.component';
import { HomePainelComponent } from './home/home-painel/home-painel.component';
import { ProfileComponent } from './usuario/profile/profile.component';
import { ProdutoCadastroComponent } from './produto/produto-cadastro/produto-cadastro.component';
import { ProdutoListagemComponent } from './produto/produto-listagem/produto-listagem.component';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'cadastrar', component: SignUpComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: '', component: DashboardPainelComponent },
            { path: 'produtos', component: ProdutoListagemComponent, children: [] },
            { path: 'produtos/cadastro/:id', component: ProdutoCadastroComponent },
            { path: 'produtos/cadastro', component: ProdutoCadastroComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', component: HomePainelComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'produtos', component: ProdutoListagemComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);