import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker} from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { GpsService } from "../services/gps.service";

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
    } catch (err) {
      console.log('ERROR: ',err);
    }
  }

  //metodo para markar mi ubicacion
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

  //metodo para markar taxis
  async MarkTaxis(){
    try {
      const marksTaxi : Marker[] = [
        // Taxi 1
        {
          coordinate: {
            lat: -2.1572979418568607,
            lng: -79.87951838517485
          },
          title: 'Taxista',
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        // Taxi 2 
        {
          coordinate: {
            lat: -2.191777030369763,
            lng: -79.90149104316366
          },
          title: 'Taxista',
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        // Taxi 3
        {
          coordinate: {
            lat: -2.1485493916001914,
            lng: -79.90629756160939
          },
          title: 'Taxista',
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        // Taxi 4
        {
          coordinate: {
            lat: -2.1931493160511333,
            lng: -79.88741481057262
          },
          title: 'Taxista',
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
  }

}
