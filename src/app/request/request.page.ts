import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'src/environments/environment';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  constructor(private router: Router, private service: DataService) { }

  //1 = Select
  //2 = Now
  hiddenHour: number = 1;

  nombre:string;
  calle1: any;
  calle2: any;
  numeroDeCalle: any;
  hora: any = '00:00 Am';
  timeNow: any;

  solicitarRegister(){
    const solicito1 = {
      calle1: this.calle1,
      // calle2: this.calle2,
      numeroDeCalle: this.numeroDeCalle,
      hora: this.hora,
      // horaNow: this.timeNow
    }

    const solicito2 = {
      calle1: this.calle1,
      // calle2: this.calle2,
      numeroDeCalle: this.numeroDeCalle,
      // hora: this.hora,
      horaNow: this.timeNow
    }
    //redireccion
    this.router.navigateByUrl('/taxi-view');
    //nombre capturado
    auth.onAuthStateChanged((user) => {
      return (this.hiddenHour == 1) ? this.service.registerSolicitud(solicito1, user.displayName) : this.service.registerSolicitud(solicito2,user.displayName)
    });
    //condicion ternaria
  }

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


  ngOnInit() {
    var today = new Date();
    this.timeNow = today.toLocaleTimeString();

    auth.onAuthStateChanged((user) => {
      return(user.photoURL != 'cliente') ? this.router.navigateByUrl('/lobby') : null 
    });
  }


}


