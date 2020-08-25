import { CadastraRoleComponent } from './usuario/cadastra-role/cadastra-role.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },    
  { path: '', component: LayoutComponent, children:[
    { path: 'cadastraRole', component: CadastraRoleComponent, canActivate : [AuthGuard], data: {
      roles: [
        "ROLE_ADMIN"
      ]
    } },  
    { path: 'home', component: HomeComponent, canActivate : [AuthGuard]},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
  ] }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
