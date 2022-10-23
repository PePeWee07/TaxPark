import { Router } from '@angular/router';
import { db, auth } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import Usuario from '../interface/usuario';
import Taxista from '../interface/taxista';
import Solicitar from '../interface/solicitar';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router: Router) { }

  // Metodo guardar usuario
  async registerUsers(cliente: Usuario, email:string, password: string){
    //Ruta de coleccion
    const myCollection = db.collection('users').doc();
    // Capturo ID
    const idCollection = myCollection.id;
    // Mando a guardar en BD
   await myCollection.set({id: idCollection, rol: 'Cliente', ...cliente})
    .then(() => {
      //Promesa exitosas
      console.log("Document successfully written!");
      alert('New User register')
      // registro en AUTH
      auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var userInfo = userCredential.additionalUserInfo;
        var userCredentials = userCredential.credential;
        console.log('userInfo: ', userInfo);
        console.log('userCredentials: ', userCredentials);
        this.router.navigateByUrl('/request')
        return userCredential.user.updateProfile({ displayName: cliente.nombre + ' ' + cliente.apellido, photoURL: 'cliente'})
      }).catch((error) => {
      alert('No se pudo guardar las credenciales')
      console.log('CODE ERROR: ', error.code);
      console.log('MSG ERROR: ', error.message);
    });
    })
    .catch((error) => {
      //Alerta de error
      console.error("Error writing document: ", error);
    });
  }

  // Metodo guardar Taxis
  async registerTaxis(taxista: Taxista, email:string, password: string){
    //Ruta de coleccion
    const myCollection = db.collection('Taxis').doc();
    // Capturo ID
    const idCollection = myCollection.id;
    // Mando a guardar en BD
   await myCollection.set({id: idCollection, rol: 'Taxista', ...taxista})
    .then(() => {
      //Promesa exitosas
      console.log("Document successfully written!");
      alert('New Taxista register')
      // registro en AUTH
      auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        return userCredential.user.updateProfile({ displayName: taxista.nombre + ' ' + taxista.apellido, photoURL: 'taxista'})
        var user = userCredential.user;
      })
    .catch((error) => {
      alert('No se pudo guardar las credenciales')
      console.log('CODE ERROR: ', error.code);
      console.log('MSG ERROR: ', error.message);
    });
    })
    .catch((error) => {
      //Alerta de error
      console.error("Error writing document: ", error);
    });
  }

  //Metodo logueo
  loginUsers(email:string, password: string){
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      alert('Acceso exitoso')
    })
    .catch((error) => {
      alert('No se econtro las credenciales')
        console.log('CODE ERROR: ', error.code);
        console.log('MSG ERROR: ', error.message);
    });
  }

  // Metodo guardar Solicitudes
  async registerSolicitud(solicita: Solicitar, nombre:string){
    //Ruta de coleccion
    const myCollection = db.collection('Request').doc();
    // Capturo ID
    const idCollection = myCollection.id;
    // Mando a guardar en BD
    await myCollection.set({id: idCollection, nombre:nombre, ...solicita})
    .then(() => {
      //Promesa exitosas
      console.log("Document successfully written!");
      alert('New register')
    })
    .catch((error) => {
      //Alerta de error
      console.error("Error writing document: ", error);
    });
  }
}
