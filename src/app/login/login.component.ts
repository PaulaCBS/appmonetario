import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  loginForm: FormGroup;

  constructor(

    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  exibeErro(nomeControle: string) {
    if (!this.loginForm.get(nomeControle)) {
      return false;
    }
    return this.loginForm.get(nomeControle).invalid && this.loginForm.get(nomeControle).touched;
  }

  exibeVerificado(nomeControle: string) {
    if (!this.loginForm.get(nomeControle)) {
      return false;
    }
    return this.loginForm.get(nomeControle).valid && this.loginForm.get(nomeControle).touched;
  }

  validateAllFormsFields() {
    Object.keys(this.loginForm.controls).forEach(field => {
      const control = this.loginForm.get(field);
      control.markAsTouched();
    });
  }
  
  logon() {
 
    if (this.loginForm.invalid) {
      this.validateAllFormsFields();
      return;
    }

    console.log(this.loginForm);
  }

  
}
