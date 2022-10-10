import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxi-view',
  templateUrl: './taxi-view.page.html',
  styleUrls: ['./taxi-view.page.scss'],
})
export class TaxiViewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  go() {
    this.router.navigateByUrl('/map');
  }

}
