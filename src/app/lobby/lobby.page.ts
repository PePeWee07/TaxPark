import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'src/environments/environment';


@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {

  show: boolean = false;

  constructor(private router: Router) { }

  go() {
    this.router.navigateByUrl('/login');
  }
  go2() {
    this.router.navigateByUrl('/register');
  }

  logout(){
    auth.signOut().then(() => this.router.navigateByUrl('/login'))
  }

  validar: string;
  validacion(){
    auth.onAuthStateChanged((user) => {
      return (user) ? this.show = true : console.log('Sin logueo');
    });
  }

  ngOnInit() {
    this.validacion();
  }

}
