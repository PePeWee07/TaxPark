import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.page.html',
  styleUrls: ['./client-view.page.scss'],
})
export class ClientViewPage implements OnInit {

  @ViewChild('contenedor', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponente(componente: string){
    this.container.remove();
    let componentFactory;

    if (componente === 'perfil') {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(ProfileComponent);
    } 
    const component = this.container.createComponent(componentFactory);
  }

  ngOnInit() {
  }

}
