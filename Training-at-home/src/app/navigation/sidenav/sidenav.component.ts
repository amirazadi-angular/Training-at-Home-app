import { Component, EventEmitter, Output, signal } from '@angular/core';
import { Imenu } from '../../interface/navarItem.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  imgUrl: string = 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp';
  name: string = 'Amirhossein';
  level: string = 'Beginner';

  menuItem = signal<Imenu[]>([
    {
      icon: 'home',
      label: 'Home',
      route: '',
    },
    {
      icon: 'dashboard',
      label: 'Dashbord',
      route: 'dashboard',
    },
    {
      icon: 'fitness_center',
      label: 'Training',
      route: 'training',
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
    },
    {
      icon: 'settings',
      label: 'Setting',
      route: 'setting',
    },
  ]);

  @Output() toCliseSidebar = new EventEmitter<void>();

  toCloseSidebar() {
    this.toCliseSidebar.emit();
  }
}
