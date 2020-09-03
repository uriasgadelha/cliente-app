import { AuthGuard } from './../auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';

const routes: Routes = [
  {
    path: 'usuario', component: LayoutComponent, canActivate: [AuthGuard], data: {
      roles: [
        "ROLE_ADMIN"
      ]
    }, children: [
      { path: 'form', component: UsuarioFormComponent },
      { path: 'form/:id', component: UsuarioFormComponent },
      { path: 'lista', component: UsuarioListaComponent },
      { path: '', redirectTo: '/usuario/lista', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
