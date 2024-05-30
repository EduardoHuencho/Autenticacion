import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from '../service/login.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [LoginService]
})
export class AppComponent {
  title = 'angular-login-frontend';
}