import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {

  constructor(private router: Router) { }

  go() {
    this.router.navigateByUrl('/login');
  }
  go2() {
    this.router.navigateByUrl('/register');
  }

  ngOnInit() {
  }

}
