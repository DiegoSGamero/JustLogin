import { Component } from '@angular/core';
import { LoginLayout } from '../../components/login-layout/login-layout';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginLayout
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

}
