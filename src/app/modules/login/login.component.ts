import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  inValid = true;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    const { username, password } = this.form.value;
    if (this.form.invalid) {
      this.inValid = false;
      return;
    }
    if (username == 'username' && password == 'password') {
      this._router.navigate(['/employee-management/dashboard']);
      this.inValid = false;
    }
  }
}
