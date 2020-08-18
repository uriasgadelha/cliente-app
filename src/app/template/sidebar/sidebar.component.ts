import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuarioLogado: string;
  roles: string[];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.roles = this.authService.getRoles();
  }

  logout() {
    this.authService.encerrarSessao();
    this.router.navigate(['/login']);
  }

  isMenuVisivel(nomeMenu: string): boolean {
    
    if (this.roles.includes('ROLE_ADMIN')) {
      return true;
    }
    
    let roleASerTestada = ''
    
    if (nomeMenu == 'clientes') {
      roleASerTestada = 'ROLE_CLIENTE';
    } else if (nomeMenu == 'servicos') {
      roleASerTestada = 'ROLE_SERVICO';
    }
    
    return this.roles.includes(roleASerTestada);
  }

}
