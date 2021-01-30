import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form){
    if(!form.valid){
      form.controls.name.markAsTouched();
      form.controls.email.markAsTouched();
      form.controls.cpf.markAsTouched();
      return
    }

  }
}
