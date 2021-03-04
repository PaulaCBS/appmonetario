import { Component, OnInit } from '@angular/core';
import { Usuarios, Contas } from '../clientes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-painel-cliente',
  templateUrl: './painel-cliente.component.html',
  styleUrls: ['./painel-cliente.component.css']
})
export class PainelClienteComponent implements OnInit {

  usuario: Usuarios;
  conta: Contas;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ClientesService: ClientesService
  ) { }

  ngOnInit() {
    this.carregarUsuario();
    this.carregarConta();
  }

  carregarUsuario() {

    const idUsuario = this.route.snapshot.paramMap.get('id');

    this.ClientesService.getUsuario(idUsuario)
      .pipe(
        take(1)
      )
      .subscribe(
        response => this.onSuccessUser(response),
        error => this.onErrorUser(error),
      );
  }

  onSuccessUser(response: Usuarios) {
    this.usuario = response;
  }

  onErrorUser(error: any) {
    console.error(error);
  }

  carregarConta() {
    const idUsuario = this.route.snapshot.paramMap.get('id');

    this.ClientesService.getConta(idUsuario)
      .pipe(
        take(1)
      )
      .subscribe(
        response => this.onSuccessAccount(response),
        error => this.onErrorAccount(error),
      );
  }

  onSuccessAccount(response: Contas) {
    this.conta = response;
  }

  onErrorAccount(error: any) {
    console.error(error);
  }
}