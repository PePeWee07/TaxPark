import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inico', url: '/lobby', icon: 'home' },
    { title: 'Map', url: '/map', icon: 'map' },
    { title: 'Login', url: '/login', icon: 'person' },
    { title: 'Registro', url: '/register', icon: 'earth' },
    { title: 'Solicitar', url: '/request', icon: 'car' },
    { title: 'Tu Clientes', url: '/client-view', icon: 'warning' },
    { title: 'Tu Taxi', url: '/taxi-view', icon: 'warning' },
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
