import { Component } from '@angular/core';
import { Tile } from '../../interface/routeimageMain.interface';

@Component({
  selector: 'app-route-grid',
  templateUrl: './route-grid.component.html',
  styleUrl: './route-grid.component.css',
})
export class RouteGridComponent {
  tiles: Tile[] = [
    {
      text: 'Gym at home',
      cols: 3,
      rows: 1,
      style:
        'gap : 20px ; background-image: url(../../assets/gym-1.png) ; box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;',
    },
    {
      text: 'Be attractive',
      cols: 1,
      rows: 2,
      style:
        'gap : 20px;  background-image: url(../../assets/gym-2.png); box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;',
    },
    {
      text: 'Have a routine',
      cols: 1,
      rows: 1,
      style:
        'gap : 20px;background-image: url(../../assets/gym-4.png); box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;',
    },
    {
      text: 'Be healthy and well.',
      cols: 2,
      rows: 1,
      style:
        'gap : 20px;background-image: url(../../assets/gym-3.png); box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;',
    },
  ];
}
