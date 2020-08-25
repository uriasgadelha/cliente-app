import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraRoleComponent } from './cadastra-role/cadastra-role.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';





@NgModule({
  declarations: [CadastraRoleComponent],
  imports: [
    CommonModule,    
    FormsModule,
    RouterModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  exports: [
    CadastraRoleComponent
  ]
})
export class UsuarioModule { }
