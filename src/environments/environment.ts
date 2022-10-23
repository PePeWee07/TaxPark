// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

export const environment = {
  firebaseConfig: {
    projectId: 'taxpark-a7827',
    appId: '1:526448906367:web:c2760155a78ee071642f4a',
    storageBucket: 'taxpark-a7827.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyACq8CiufkSEbeCAgvmUjm4UUdmWAXRx_I',
    authDomain: 'taxpark-a7827.firebaseapp.com',
    messagingSenderId: '526448906367',
    measurementId: 'G-GF168ZH7XC',
  },
  production: false,
  mapsKey: 'AIzaSyAnhouiTKldCWvnZc68eNQPdWhiiM1nEzw'
};

firebase.initializeApp(environment.firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()
const storage= firebase.storage()

export {db, auth, storage}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
