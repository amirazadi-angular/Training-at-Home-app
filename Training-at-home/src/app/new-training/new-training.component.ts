import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css',
})
export class NewTrainingComponent {
  trainingArray: string[] = [
    'Push-Ups',
    'jogging',
    'exercise bike',
    'iron',
    'sit-up',
  ];

  @Output() startTraining = new EventEmitter<void>();

  onStartTraining() {
    this.startTraining.emit();
  }
}
