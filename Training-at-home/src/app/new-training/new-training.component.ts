import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrainingService } from '../training/training.service';
import { Iexercise } from '../interface/exercise.interface';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { duration } from 'moment';
@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css',
})
export class NewTrainingComponent implements OnInit {

  trainingArray!: Observable<Iexercise[]>;
  constructor(private trainingServise: TrainingService, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.trainingArray = this.db.collection('exercises').snapshotChanges().pipe(
      map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            name: (doc.payload.doc.data() as any).name,
            duration: (doc.payload.doc.data() as any).duration,
            calories: (doc.payload.doc.data() as any).calories
          }
        })
      })
    )
  }


  onStartTraining(form: NgForm) {
    this.trainingServise.startExercise(form.value.exercise);
  }
}
