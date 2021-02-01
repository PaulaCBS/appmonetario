import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Usuarios } from './painel-usuario.interfaces';
import { PainelUsuarioService } from './painel-usuario.service';


@Component({
  selector: 'app-painel-usuario',
  templateUrl: './painel-usuario.component.html',
  styleUrls: ['./painel-usuario.component.css']
})
export class PainelUsuarioComponent implements OnInit {

  usuarios: Usuarios[];


  constructor(
    private router: Router,
    private painelUsuarioService: PainelUsuarioService,
  ) { }

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios() {

    this.painelUsuarioService.getUsuarios()
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
