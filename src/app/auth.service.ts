import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlUSuario: string = environment.apiURLUsuarios;
  urlToken: string = environment.apiURLToken;
  urlUsuariosListaUsername: string = environment.apiURLUsuariosListaUsername;
  urlUsuariosListaRoles: string = environment.apiURLUsuariosListaRoles;
  urlUsuariosAlteraRoles: string = environment.apiURLUsuariosAlteraRoles;
  clientID: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient    
  ) { }

  obterToken() {
    const tokenString = localStorage.getItem('access_token');
    if (tokenString) {
      const token = JSON.parse(tokenString).access_token;
      return token;
    }
    return null;
  }

  encerrarSessao(){
    localStorage.removeItem('access_token');
  }

  getUsuarioAutenticado(){
    const token = this.obterToken();
    if (token) {      
      return this.jwtHelper.decodeToken(token).user_name;
    }
    return null;    
  }

  getRoles(): string[]{
    const token = this.obterToken();
    if (token) {  
      return this.jwtHelper.decodeToken(token).authorities;
    }
    return null;    
  }

  hasRole(role: string): boolean{
    const token = this.obterToken();
    if (token) { 
       return (this.getRoles().indexOf(role) > -1);
    }
    return false;    
  }

  isAuthenticated(): boolean {
    const token = this.obterToken();
    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }

  tentarLogar(username: string, password: string): Observable<any> {

    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    return this.http.post(this.urlToken, params.toString(), { headers });
  }

  listarRolesUsuario(username: string) : Observable<string[]> {

    let httpParams = new HttpParams()
    .set("nomeUsuario", username ? username : "")    
    
    const urlConsulta = this.urlUsuariosListaRoles + "?" + httpParams.toString();    
    return this.http.get<any>(urlConsulta);

   }

   alteraRoles(usuario: string, roles:string): Observable<any> {
    const params = new HttpParams()
    .set('nomeUsuario', usuario)
    .set('rolesUsuario', roles);

    const url = this.urlUsuariosAlteraRoles + "?" + params.toString();    
    return this.http.patch(url, null);
    
  }
  // getHeader() : string {
  //   return '{ "Authorization": "Basic " + btoa(`${this.clientID}:${this.clientSecret}`), "Content-Type": "application/x-www-form-urlencoded" }';    
  // }

}
