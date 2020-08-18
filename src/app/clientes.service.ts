import { environment } from './../environments/environment';
import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiUrlClientes: string = environment.apiURLClientes;

  constructor(private http: HttpClient) {

  }


  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrlClientes, cliente)
  }

  atualizar(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(`${this.apiUrlClientes}/${cliente.id}`, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrlClientes);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrlClientes}/${id}`);
  }

  deletar(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlClientes}/${cliente.id}`);
  }

}
