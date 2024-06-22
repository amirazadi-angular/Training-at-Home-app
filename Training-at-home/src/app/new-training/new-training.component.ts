import { Component } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css'
})
export class NewTrainingComponent {
  trainingArray : string[] = [
    "Push-Ups",
    "jogging",
    "exercise bike",
    "iron",
    "sit-up"
  ]
}
