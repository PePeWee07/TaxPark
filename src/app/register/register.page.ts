import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ClienteComponent } from "./cliente/cliente.component";
import { TaxistaComponent } from './taxista/taxista.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('contenedor', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponente(componente: string){
    this.container.remove();
    let componentFactory;

    if (componente === 'cliente') {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(ClienteComponent);
    } 
    if (componente === 'taxista'){
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(TaxistaComponent);
    }
    const component = this.container.createComponent(componentFactory);
  }

  ngOnInit() {
  }

}
