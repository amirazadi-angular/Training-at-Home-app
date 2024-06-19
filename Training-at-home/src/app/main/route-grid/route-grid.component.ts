import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  style: string;
}

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
        "gap : 20px ; background-image: url('http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRukY94m-j4J9uq7VsBWWPgw8_bhr99p19oXkG8CUfhDChHXUICe7v_2DT5g7iaNNNXQCvPkI6szvPvqvtSFAc') ; box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;",
    },
    {
      text: 'Be attractive',
      cols: 1,
      rows: 2,
      style:
        "gap : 20px; background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNabPeAbaMYB3HAUGKDmbmr5XGdAiFLs_g_0OXw1W0TZSn5goWsnnAhtdWnQXo7cJbXKg&usqp=CAU'); box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;",
    },
    {
      text: 'Have a routine',
      cols: 1,
      rows: 1,
      style:
        "gap : 20px; background-image: url('https://corehomefitness.com/cdn/shop/articles/DM1_8575-755156_1000x.jpg?v=1635288721'); box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;",
    },
    {
      text: 'Be healthy and well.',
      cols: 2,
      rows: 1,
      style:
        "gap : 20px; background-image: url('https://www.houstonmethodist.org/-/media/images/contenthub/article-images/exercise/hub_athomeworkouts_article.ashx?mw=1382&hash=834DA4CC5546C8C842AE0E0C2B5CBD6B'); box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;",
    },
  ];
}
