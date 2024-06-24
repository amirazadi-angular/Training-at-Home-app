import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthServise } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {

  logoUrl: string = 'assets/trainingathomelogo.png';
  isAuth: boolean | undefined;
  subsciption: Subscription | undefined;
  imgUrl: string = 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp';

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

  constructor(private authService: AuthServise) { }

  ngOnInit(): void {
    this.subsciption = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  };

  ngOnDestroy(): void {
    this.subsciption?.unsubscribe();
  };

  @Output() sidebarToggle = new EventEmitter<void>();

  onToggleSidebar() {
    this.sidebarToggle.emit();
  }

  logOutMembers(){
    this.authService.logOut()
  }
}
