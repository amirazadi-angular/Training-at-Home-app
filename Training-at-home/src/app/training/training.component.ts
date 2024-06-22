import { Component } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  // this parameter is for Hide training cm , true == hide
  onGoingTraining : boolean = true;
}
