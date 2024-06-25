import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  playVideo : boolean = false;

  playVideoButton(){
    this.playVideo=!this.playVideo
  }
}
