import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { auth, db } from 'src/environments/environment';


@Component({
  selector: 'app-taxi-view',
  templateUrl: './taxi-view.page.html',
  styleUrls: ['./taxi-view.page.scss'],
})
export class TaxiViewPage implements OnInit {

  constructor(private router: Router) { }

  conductor: string;
  matricula:string;
  marca:string;
  formulario: any[] = []

  ngOnInit() {
    this.taxistaAsignado();
    auth.onAuthStateChanged((user) => {
      return(user.photoURL != 'cliente') ? this.router.navigateByUrl('/lobby') : null 
    });
  }

  taxistaAsignado(){
    const docRef = db.collection("Taxis").doc("XGw6JbO4XpkFpXkGPSKL");
    docRef.get().then((doc) => {
        if (doc.exists) {
          const ficha = doc.data();
          this.formulario.push(ficha);
          this.conductor = ficha.nombre + ' ' + ficha.apellido
          this.matricula = ficha.matricula
          this.marca = ficha.marcaDeCoche
        } else {
          alert('No disponemos taxis')
          console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  }
 


  go() {
    this.router.navigateByUrl('/map');
  }

}

// var docRef = db.collection("Ficha").doc(this.$route.params.id);

//       docRef
//         .get()
//         .then((doc) => {
//           if (doc.exists) {
//             const ficha = doc.data();
//             ficha.id = doc.id;
//             this.formulario.push(ficha);
//             //CARGAR CAMPOS
//             // bloque-1
//             this.bloque1.Spi_SDH = ficha.Spi_SDH
