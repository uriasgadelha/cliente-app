import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlBaseUsuario : string = environment.apiURLBase + '/api/usuarios'

  constructor(
    private http: HttpClient   
  ) { }

  salvar(usuario: Usuario): Observable<any> {    
    return this.http.post<any>(this.urlBaseUsuario, usuario);    
  }

  listarNomesUsuarios() : Observable<string[]> {        
    return this.http.get<any>(this.urlBaseUsuario + '/listarNomesUsuarios');
  }

  deletar(usuario: Usuario): Observable<any> {
    return this.http.delete<any>(`${this.urlBaseUsuario}/${usuario.id}`);
  }

  listartodos() : Observable<Usuario[]> {        
    return this.http.get<Usuario[]>(this.urlBaseUsuario);
  }

  getUsuarioId(id: number) : Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlBaseUsuario}/${id}`);
  }

  atualizar(usuario: Usuario): Observable<any> {
    return this.http.put<Usuario>(`${this.urlBaseUsuario}/${usuario.id}`, usuario);
  }

}
