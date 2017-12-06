import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'cadastrar', component: SignUpComponent},
    //{path: 'cadastro/:id', component: CadastroComponent},

    {path: 'dashboard', component: DashboardComponent},

    {path: 'home', component: HomeComponent},

    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);