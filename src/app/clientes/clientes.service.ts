import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contas, Usuarios } from './clientesInterface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { }

  getUsuarios() {
    return this.http.get<Usuarios[]>(this.API_URL + '/usuarios')
  }

  getContas() {
    return this.http.get<Contas[]>(this.API_URL + '/contas')
  }

}
