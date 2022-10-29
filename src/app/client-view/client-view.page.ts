import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { auth, db } from 'src/environments/environment';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.page.html',
  styleUrls: ['./client-view.page.scss'],
})
export class ClientViewPage implements OnInit {
  @ViewChild('contenedor', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private router: Router) {}

  //No estoy ocupando este metodo
  loadComponente(componente: string) {
    this.container.remove();
    let componentFactory;

    if (componente === 'perfil') {
      componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(ProfileComponent);
    }
    const component = this.container.createComponent(componentFactory);
  }

  
  datosFicha: any[] = [];
  obtenerDatos() {
    db.collection('Request')
      .onSnapshot((querySnapshot) => {
        this.datosFicha = [];
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            const ficha = doc.data();
            ficha.id = doc.id;
            this.datosFicha.push(ficha);
            // console.log(doc.id, " => ", doc.data())
          }else{
            alert('No hay Solicitudes')
          }
        });
      });
  }

  eliminarDatos(item: any){
    db.collection("Request").doc(item).delete().then(() => {
      console.log("Document successfully deleted!");
      alert('Elimiando')
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
  }

  aceptarCarrera(item: any){
    db.collection("Request").doc(item).delete().then(() => {
      console.log("Document successfully deleted!");
      this.router.navigateByUrl('/map')
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
  }
  cliente: any;
  calle1: any;
  calle2:any;
  hora:any;


  ngOnInit() {
    this.obtenerDatos();

    auth.onAuthStateChanged((user) => {
      return(user.photoURL != 'taxista') ? this.router.navigateByUrl('/lobby') : null 
    });
  }
}
