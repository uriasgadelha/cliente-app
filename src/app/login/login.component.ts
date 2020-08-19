import { AuthService } from './../auth.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;   
  roles: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  errors: String[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    this.authService
    .tentarLogar(this.username, this.password)
    .subscribe(response => {
      const access_token = JSON.stringify(response);
      localStorage.setItem('access_token',access_token);
      this.router.navigate(['/home']);
    }, errorResponse => {
      this.errors = ['Usuário ou Senha inválidos!']
    })    
  }

  preparaCadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    usuario.roles = this.roles;
    console.log(usuario)
    this.authService.salvar(usuario)
    .subscribe(
      response => {
    
        this.mensagemSucesso = "Usuário criado com sucesso";    
        this.cadastrando = false;
        this.username = null;
        this.password = null; 
        this.roles = null;       
        this.errors = null;    
      }, errorResponse => {        
        this.errors = errorResponse.error.errors;
        this.mensagemSucesso = null;
      }
    )

  }

}
