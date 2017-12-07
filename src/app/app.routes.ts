import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DashboardPainelComponent } from './dashboard/dashboard-painel/dashboard-painel.component';
import { HomePainelComponent } from './home/home-painel/home-painel.component';
import { ProfileComponent } from './usuario/profile/profile.component';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'cadastrar', component: SignUpComponent },
    //{path: 'cadastro/:id', component: CadastroComponent},
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: '', component: DashboardPainelComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', component: HomePainelComponent },
            { path: 'profile', component: ProfileComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);