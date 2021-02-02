import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Usuarios } from './clientesInterface';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  usuarios: Usuarios[];

  constructor(
    private router: Router,
    private ClientesService: ClientesService,
  ) { }

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios() {

    this.ClientesService.getUsuarios()
      .pipe(
        take(1)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error),
      );
  }

  onSuccess(response: Usuarios[]) {
    this.usuarios = response;
  }

  onError(error: any) {
    console.error(error);
  }

}
