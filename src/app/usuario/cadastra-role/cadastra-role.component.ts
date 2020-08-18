import { AuthService } from './../../auth.service';
import { Usuario } from './../../login/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cadastra-role',
  templateUrl: './cadastra-role.component.html',
  styleUrls: ['./cadastra-role.component.css']
})
export class CadastraRoleComponent implements OnInit {

  usuariosCadastrados : Usuario[] = [];
  nomeUsuario: string;
  rolesDisponiveis : string[];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const u: Usuario = new Usuario();
    u.username = 'Usuario1';
    const u2: Usuario = new Usuario();
    u2.username = 'Usuario2';
    this.usuariosCadastrados.push(u);
    this.usuariosCadastrados.push(u2);
    console.log(this.usuariosCadastrados);
  }
  
  alteraRoles(usuario: string, roles:string) {
    console.log(usuario);
    console.log(roles);
  }

  onSubmit() {
    console.log('subiu');
  }

}
