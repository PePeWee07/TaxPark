import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { auth } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private service: DataService, private router: Router) { }

  email:string;
  password:string;

  login(){
    this.service.loginUsers(this.email, this.password);
    this.router.navigateByUrl('/request')
  }

  validar: string;
  validacion(){
    auth.onAuthStateChanged((user) => {
      return (user) ? this.validar = user.photoURL : console.log('Sin logueo');
    });
  }

  ngOnInit() {
    this.validacion();
  }

}
