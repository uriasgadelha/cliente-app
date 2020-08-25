import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'cadastra-role',
  templateUrl: './cadastra-role.component.html',
  styleUrls: ['./cadastra-role.component.css']
})
export class CadastraRoleComponent implements OnInit {

  usuariosCadastrados: string[] = [];
  nomeUsuario: string;
  rolesUsuario: string[];
  roleAdmin: boolean;
  roleCliente: boolean;
  roleServico: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.listarUsuarios()
      .subscribe(r => {
        this.usuariosCadastrados = r;
      })
  }



  onSubmit() {



  }

  adicionaRole(roles: string, role: string): string {    

    if (roles != "") {
      roles += "," + role;
    } else {
      roles = role;
    }

    return roles;
  }

  getRolesParaAlterar(): string {

    let roles: string = "";
    
    if (this.roleAdmin) {
      roles = this.adicionaRole(roles, "ADMIN");
    }

    if (this.roleCliente) {
      roles = this.adicionaRole(roles, "CLIENTE");
    }

    if (this.roleServico) {
      roles = this.adicionaRole(roles, "SERVICO");
    }

    return roles;
  }

  alteraRoles() {
    const rolesParaAlterar = this.getRolesParaAlterar();    
    this.authService.alteraRoles(this.nomeUsuario, rolesParaAlterar).subscribe(r => console.log("Roles Alteradas"));
  }

  atualizaRoles() {

    this.authService
      .listarRolesUsuario(this.nomeUsuario)
      .subscribe(response => {

        this.rolesUsuario = response;
        this.roleAdmin = this.rolesUsuario.includes('ADMIN');
        this.roleCliente = this.rolesUsuario.includes('CLIENTE');
        this.roleServico = this.rolesUsuario.includes('SERVICO');
      });
  }

}
