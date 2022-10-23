import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker} from '@capacitor/google-maps';
import { MarkerCallbackData } from '@capacitor/google-maps/dist/typings/definitions';
import { environment } from 'src/environments/environment';
import { GpsService } from "../services/gps.service";
import { auth } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map')
  mapRef: ElementRef;
  newMap: GoogleMap;

  constructor(private geoservice: GpsService) { }

  //Variables de Cords my ubication
  latitud:string
  longitud:string

  //metodo para obtener ubicacion actual
  async Geolocation(){
    this.geoservice.geolocation().then(geoData => {
      this.latitud = geoData.latitude.toString()
      this.longitud = geoData.longitude.toString()
      return this.latitud, this.longitud
    }).catch(err => {
      console.log('ERROR: ',err);
      alert('No se pudo detectar tu ubicacion')
    })
  }

  //metodo para crear mapa
  async createMap(){
    try {
      //si es cliente marca mapa de taxis si es taxista marca cliente
      auth.onAuthStateChanged(async (user) => {
        if (user.photoURL === 'cliente') {
          this.newMap = await GoogleMap.create({
            id: 'my-map',
            apiKey: environment.mapsKey,
            forceCreate: true,
            element: this.mapRef.nativeElement,
            config:{
              center:{
                lat: parseFloat(this.latitud),
                lng: parseFloat(this.longitud)
              },
              zoom: 15,
            }
          })
          await this.createMark(), this.MarkTaxis();
        }else {
          this.newMap = await GoogleMap.create({
            id: 'my-map',
            apiKey: environment.mapsKey,
            forceCreate: true,
            element: this.mapRef.nativeElement,
            config:{
              center:{
                lat: parseFloat(this.latitud),
                lng: parseFloat(this.longitud)
              },
              zoom: 15,
            }
          })
          await this.myTaxiMark(), this.myclienteMark();
        }
      });
    } catch (err) {
      console.log('ERROR: ',err);
    }
  }

  //metodo para markar mi ubicacion (cliente)
  async createMark(){
    try {
      const myMark: Marker =
    {
      coordinate: {
        lat: parseFloat(this.latitud),
        lng: parseFloat(this.longitud)
      },
      title: 'Yo',
      iconUrl: '../../assets/icon/localizacion.png',
      draggable: false,
    }
    
    await this.newMap.addMarker(myMark);
    } catch (error) {
      console.log('ERROR: ', error);
      alert('No se pudo markar tu ubicación')
    }
  }

  //metodo para markar mi ubicacion (taxi)
  async myTaxiMark(){
    try {
      const myMark: Marker =
    {
      coordinate: {
        lat: parseFloat(this.latitud),
        lng: parseFloat(this.longitud)
      },
      title: 'Yo',
      iconUrl: '../../assets/icon/taxi.png',
      draggable: false,
    }
    
    await this.newMap.addMarker(myMark);
    } catch (error) {
      console.log('ERROR: ', error);
      alert('No se pudo markar tu ubicación')
    }
  }

  async myclienteMark(){
    try {
      const clienteMark: Marker =
      {
        coordinate: {
          lat: 41.539047395790526,
          lng: 2.4456611334166056
        },
        title: 'Clente',
        iconUrl: '../../assets/icon/localizacion.png',
        draggable: false,
      }
      
      await this.newMap.addMarker(clienteMark);
    } catch (error) {
      alert('No se Econtro Marca del Cliente')
    }
  }

  // Variable Num taxis
  numTax:  Number = 0;
  //metodo de parada Randon
  NumberParking(){
    setInterval(() => {
      // console.log("NumTax: ", this.numTax)
      return this.numTax = Math.floor(Math.random() * (10 - 1) + 1)
    }, 9000);
  }

  //metodo para markar taxis
  async MarkTaxis(){
    try {
      const marksTaxi : Marker[] = [
        {
          coordinate: {
            lat: parseFloat(this.latitud),
            lng: parseFloat(this.longitud)
          },
          title: 'Taxis: ' + String(this.numTax),
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        {
          coordinate: {
            lat: 41.54246192157841,
            lng: 2.4219310322348035
          },
          title: 'Taxis: ' + String(this.numTax),
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        {
          coordinate: {
            lat: 41.544298582619156,
            lng: 2.424745846070405
          },
          title: 'Taxis: ' + String(this.numTax),
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        {
          coordinate: {
            lat: 41.54475773972806,
            lng: 2.4267306506980733
          },
          title: 'Taxis: ' + String(this.numTax),
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        {
          coordinate: {
            lat: 41.54273202218488,
            lng: 2.4390364400797253
          },
          title: 'Taxis: ' + String(this.numTax),
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        {
          coordinate: {
            lat: 41.54964621043261,
            lng: 2.435535966463657
          },
          title: 'Taxis: ' + String(this.numTax),
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        {
          coordinate: {
            lat: 41.55142865470472,
            lng: 2.445459989601995
          },
          title: 'Taxis: ' + String(this.numTax),
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        {
          coordinate: {
            lat: 41.553238055439294,
            lng: 2.4453156401745284
          },
          title: 'Taxis: ' + String(this.numTax),
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        // Taxi 1 41.539976944193576, 2.425792379419539
        {
          coordinate: {
            lat: 41.539976944193576,
            lng: 2.425792379419539
          },
          title: 'Taxis: ' + String(this.numTax),
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        // Taxi 2 41.53622228636761, 2.4223640805172035
        {
          coordinate: {
            lat: 41.53622228636761,
            lng: 2.4223640805172035
          },
          title: 'Taxis: ' + String(this.numTax),
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        // Taxi 3 41.53248397057798, 2.4435759759484283
        {
          coordinate: {
            lat: 41.53248397057798,
            lng: 2.4435759759484283
          },
          title: 'Taxis: ' + String(this.numTax),
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        // Taxi 4 41.53451521587608, 2.4439985736890866
        {
          coordinate: {
            lat: 41.53451521587608,
            lng: 2.4439985736890866,
          },

          title: 'Taxis: ' + String(this.numTax),
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
      ]
      await this.newMap.addMarkers(marksTaxi);
    } catch (error) {
      console.log('ERROR: ', error);
      alert('No se pudo markar las ubicaciónes de taxis')
    }
  }


  //Elimino la vista del mapa
  async Destroy(){
    await this.newMap.destroy();
  }


  
  ngOnInit() {
    this.Geolocation();
    this.NumberParking();
  }

}
