import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  constructor(private router: Router) { }

  go() {
    this.router.navigateByUrl('/map');
  }

  ngOnInit() {
  }

}