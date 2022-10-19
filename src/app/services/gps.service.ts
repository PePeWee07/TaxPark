import { Injectable } from '@angular/core';
import { Geolocation } from "@capacitor/geolocation";

@Injectable({
  providedIn: 'root'
})
export class GpsService {

  constructor() { }
   geolocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates.coords);
    return coordinates.coords;
  };
}
