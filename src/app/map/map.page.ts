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
//   41.54246192157841, 2.4219310322348035
// 41.544298582619156, 2.424745846070405
// 41.54475773972806, 2.4267306506980733
// 41.54273202218488, 2.4390364400797253
// 41.54964621043261, 2.435535966463657
// 41.55142865470472, 2.445459989601995
//41.553238055439294, 2.4453156401745284
  async MarkTaxis(){
    try {
      const marksTaxi : Marker[] = [
        // Taxi 1 41.539976944193576, 2.425792379419539
        {
          coordinate: {
            lat: 41.539976944193576,
            lng: 2.425792379419539
          },
          title: 'Taxista',
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        // Taxi 2 41.53622228636761, 2.4223640805172035
        {
          coordinate: {
            lat: 41.53622228636761,
            lng: 2.4223640805172035
          },
          title: 'Taxista',
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        // Taxi 3 41.53248397057798, 2.4435759759484283
        {
          coordinate: {
            lat: 41.53248397057798,
            lng: 2.4435759759484283
          },
          title: 'Taxista',
          iconUrl: '../../assets/icon/taxi.png',
          draggable: true,
        },
        // Taxi 4 41.53451521587608, 2.4439985736890866
        {
          coordinate: {
            lat: 41.53451521587608,
            lng: 2.4439985736890866
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
