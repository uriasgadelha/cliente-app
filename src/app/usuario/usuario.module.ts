import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraRoleComponent } from './cadastra-role/cadastra-role.component';



@NgModule({
  declarations: [CadastraRoleComponent],
  imports: [
    CommonModule,    
    FormsModule,
    RouterModule
  ],
  exports: [
    CadastraRoleComponent
  ]
})
export class UsuarioModule { }
