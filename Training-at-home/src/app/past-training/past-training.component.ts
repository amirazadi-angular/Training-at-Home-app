import { Component } from '@angular/core';
import { TrainingService } from '../training/training.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrl: './past-training.component.css'
})
export class PastTrainingComponent {

  constructor(private trainingService: TrainingService) { };

  displayedColumns: string[] = ['Name', 'Duration', 'Calories', 'Date', 'State'];

  dataSource = this.trainingService.getCompliteOrCancel();
}
