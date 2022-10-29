import { Injectable } from '@angular/core';
import { Geolocation } from "@capacitor/geolocation";

@Injectable({
  providedIn: 'root'
})
export class GpsService {

  constructor() { }

  // me ayuda a obtener la geolocalicion
   geolocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates.coords);
    return coordinates.coords;
  };
}
