import { Component, OnInit } from '@angular/core';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent implements OnInit {
  // this parameter is for Hide training cm , true == hide
  onGoingTraining: boolean = true;

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.trainingService.exerciseChange.subscribe(exercise => {
      if (exercise) {
        this.onGoingTraining = false;
      } else {
        this.onGoingTraining = true;
      }
    })
  }
}
