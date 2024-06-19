import { Component, EventEmitter, Output, Signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  logoUrl: string = 'assets/trainingathomelogo.png';
  menuArray: any = [
    {
      menuName: 'Home',
      route: '',
    },
    {
      menuName: 'Training',
      route: '/training',
    },
    {
      menuName: 'Dashboard',
      route: '/dashboard',
    },
  ];

  @Output() sidebarToggle = new EventEmitter<void>();

  onToggleSidebar() {
    this.sidebarToggle.emit();
  }
}
