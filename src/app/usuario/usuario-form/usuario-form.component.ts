import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Usuario } from '../usuario';
import { environment } from 'src/environments/environment';
import { Role } from '../role'
import { ControlContainer } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario: Usuario
  id: number
  success: boolean = false;
  errors: string[];

  // Roles pré cadastradas do sistema, será pego do environment
  rolesPadrao: string = environment.roles

  // array para exibir no form
  rolesView: Role[] = []

  // array usado para guardas as ROLES marcadas no form
  rolesForm: string[] = []

  constructor(
    private router: Router,
    private service: UsuarioService,
    private activatedRoute: ActivatedRoute
  ) {
    this.usuario = new Usuario()
   }

  ngOnInit(): void {
    // Insere cada ROLE padrão no array de roleView para exibir no form
    this.rolesPadrao.split(",").map(role => {
      this.rolesView.push(new Role(role, false))
    })

    // verifica se foi passado no link o id de um usuario para editar
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(
      urlParams => {
        this.id = urlParams['id']
        if (this.id) {
          this.service
            .getUsuarioId(this.id)
            .subscribe(
              response => {                
                this.usuario = response
                this.rolesForm = this.usuario.roles.split(",")

                // Insere as ROLES do usuário no array de rolesView para exibir marcada
                this.rolesForm.forEach(val => this.carregaRoleUsuarioCheckbox(val))

              },
              errorResponse => this.usuario = new Usuario()
            )
        }
      }
    )    
  }

  onSubmit() {
    this.usuario.roles = this.rolesForm.toString()

    if (this.id) {      
      this.service.atualizar(this.usuario)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        },
          errorResponse => {
            this.success = false;
            this.errors = ['Erro ao atualizar o usuário']
          });
    } else {      
      this.service.salvar(this.usuario)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.usuario = response;
        },
          errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          });
    }     
  }

  voltarParaListagem() {
    this.router.navigate(['/usuario/lista']);
  }

  onCheckboxChange(e) {
    if (e.target.checked) {    
      // verificar se existe nas roles do usuario, caso não, inserir
      if (this.rolesForm.indexOf(e.target.value) < 0) {
        this.rolesForm.push(e.target.value)
      }
    } else {
      // remover das roles do usuario      
      this.rolesForm.splice(this.rolesForm.indexOf(e.target.value), 1)
    }
  }

  // para cada ROLE retornada do usuário já marca como true para exibir com checkbox marcado
  carregaRoleUsuarioCheckbox(role: string) {
    this.rolesView.forEach( val => {
      if (val.nome == role) {
        val.status = true
      }
    })    
  }

}
