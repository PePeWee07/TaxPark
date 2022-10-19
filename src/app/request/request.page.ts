import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  constructor(private router: Router) { }

  timeNow: string;
  hiddenHour: number = 1;

  showhour(){
    if(this.hiddenHour = 1){
      return this.hiddenHour = 2;
    }
  }
  showhour2(){
    if(this.hiddenHour = 2){
      return this.hiddenHour = 1;
    }
  }

  go() {
    this.router.navigateByUrl('/taxi-view');
  }

  ngOnInit() {
    // crea un nuevo objeto `Date`
    var today = new Date();
    this.timeNow = today.toLocaleTimeString();
    console.log(this.timeNow);
  }

}
