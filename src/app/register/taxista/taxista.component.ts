import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-taxista',
  templateUrl: './taxista.component.html',
  styleUrls: ['./taxista.component.scss'],
})
export class TaxistaComponent implements OnInit {

  constructor(private service: DataService, private router: Router) { }

  nombre: any;
  apellido: any;
  marcaDeCoche: any;
  matricula:any;
  email:any;
  password:any;

  newtaxista(){
    let taxi = {
      nombre: this.nombre,
      apellido: this.apellido,
      marcaDeCoche: this.marcaDeCoche,
      matricula: this.matricula,
      email: this.email,
      password: this.password
    }
    this.service.registerTaxis(taxi, taxi.email, taxi.password);
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {}

}
