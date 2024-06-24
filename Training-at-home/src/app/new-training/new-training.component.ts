import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrainingService } from '../training/training.service';
import { Iexercise } from '../interface/exercise.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css',
})
export class NewTrainingComponent implements OnInit {

  trainingArray: Iexercise[] = [];
  constructor(private trainingServise: TrainingService) { }

  ngOnInit(): void {
    this.trainingArray = this.trainingServise.getAvailabeExercises();
  }


  onStartTraining(form:NgForm) {
    this.trainingServise.startExercise(form.value.exercise);
  }
}
