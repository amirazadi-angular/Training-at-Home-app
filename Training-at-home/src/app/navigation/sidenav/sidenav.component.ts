import { Component, signal } from '@angular/core';
import { Imenu } from '../../interface/navarItem.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  imgUrl: string = 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp';
  name: string = 'Amirhossein';
  level : string = 'Beginner';

  menuItem = signal<Imenu[]>([
    {
      icon: 'dashboard',
      label: 'Dashbord',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'video_library',
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
    },
    {
      icon: 'comment',
      label: 'Comments',
      route: 'comments',
    },
    {
      icon:'settings',
      label: 'Setting',
      route:'setting'
    }
  ]);
}
