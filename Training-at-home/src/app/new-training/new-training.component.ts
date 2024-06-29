import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { TrainingService } from '../training/training.service';
import { Iexercise } from '../interface/exercise.interface';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css',
})
export class NewTrainingComponent implements OnInit,OnDestroy {

  trainingArray!: Iexercise[];
  exercisesSubscription!: Subscription;
  
  constructor(private trainingServise: TrainingService, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.exercisesSubscription = this.trainingServise.exercisesChange.subscribe(exercises => {
      exercises = this.trainingArray;
    });
    this.trainingServise.fetchAvailabeExercises()
  }


  onStartTraining(form: NgForm) {
    this.trainingServise.startExercise(form.value.exercise);
  }

  ngOnDestroy(): void {
    this.exercisesSubscription.unsubscribe();
  }
}
