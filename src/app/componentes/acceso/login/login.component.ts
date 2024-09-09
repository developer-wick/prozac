import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    usuario: '',
    password: ''
  };

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('User');
  }

  singin () {
    localStorage.setItem('token',this.user.usuario);
    localStorage.setItem('User', this.user.usuario);
    //this.router.navigate(['/home']);
  }

}
