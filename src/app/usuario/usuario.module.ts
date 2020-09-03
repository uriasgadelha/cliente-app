import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioRoutingModule} from './usuario-routing.module';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component'





@NgModule({
  declarations: [UsuarioFormComponent, UsuarioListaComponent],
  imports: [
    CommonModule,    
    FormsModule,
    RouterModule,
    MatCheckboxModule,
    MatSelectModule,
    UsuarioRoutingModule
  ],
  exports: [
    UsuarioFormComponent,
    UsuarioListaComponent
  ]
})
export class UsuarioModule { }
