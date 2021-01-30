import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

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
