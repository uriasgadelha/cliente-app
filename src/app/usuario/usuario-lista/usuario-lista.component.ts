import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuarioSelecionado: Usuario;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private router: Router,
    private service: UsuarioService
  ) { }

  ngOnInit(): void {
    this.service.listartodos()
      .subscribe(response => this.usuarios = response);
  }

  novoCadastro() {
    this.router.navigate(['/usuario/form']);
  }

  preparaDelecao(usuario: Usuario) {
    this.usuarioSelecionado = usuario;
  }

  deletarusuario() {
    this.service
      .deletar(this.usuarioSelecionado)
      .subscribe(response => {
        this.mensagemSucesso = `usuario ${this.usuarioSelecionado.username} deletado com Sucesso!`
        this.ngOnInit();
      },
        erro => this.mensagemErro = 'Erro ao deletar usuario')
  }

}
