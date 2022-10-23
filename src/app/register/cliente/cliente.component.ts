import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  
  constructor(private service:DataService, private router: Router) {}

  nombre: any;
  apellido: any;
  email: any;
  password: any;

  newUsuario(){
    let user = {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      password: this.password
    }
    this.service.registerUsers(user, user.email, user.password);
    this.router.navigateByUrl('/login');
  }
  
  ngOnInit() { 
  }

}
