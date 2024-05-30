/*
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}
 
  username: string = ''
  password: string = ''
  loading: boolean = false;

  // nuevo codigo
  passwordFieldType: string = 'password';
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  // fin nuevo codigo

  
  //activarBoolean() {
  //  console.log(this.username, this.password)
  //  this.loginService.login(this.username, this.password).subscribe(response => {
  //    console.log(response);
  //  }, error => {
  //    console.error(error);
  //  });
  //  this.loading = true;
  // setTimeout(() => {
  //    this.loading = false;
  //  }, 2000);
  //}

  activarBoolean() {
    console.log(this.username, this.password);
    this.loading = true;
    this.loginService.login(this.username, this.password).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}*/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  username: string = '';
  password: string = '';
  loading: boolean = false;

  passwordFieldType: string = 'password';

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  activarBoolean() {
    this.loading = true;
    setTimeout(() => {
      this.loginService.login(this.username, this.password).subscribe(
        response => {
          this.loading = false;
          if (response.success) {
            console.error('Error al iniciar sesión');
          } else {
            this.router.navigate(['/home']);
          }
        },
        error => {
          this.loading = false;
          console.error(error);
        }
      );
    }, 2000); // Simulación de retardo de 2 segundos
  }
}