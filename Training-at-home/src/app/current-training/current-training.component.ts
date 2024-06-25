import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingDialogComponent } from './stop-training-dialog/stop-training-dialog.component';
import { TrainingService } from '../training/training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.css',
})
export class CurrentTrainingComponent implements OnInit {

  progress: number = 0;
  intervalId: any;

  @Output() dialogEvent = new EventEmitter();

  trainigName !: string;
  
  constructor(private dialog: MatDialog, private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.startOrResume();
    this.trainigName = this.trainingService.getRuningExercise().name!;
  }
  
  startOrResume() {
    const increment = this.trainingService.getRuningExercise().duration! / 100 * 1000;
    this.intervalId = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) {
        this.trainingService.compliteExercise();
        clearInterval(this.intervalId);
      }
    }, increment);
  }

  stopProgress() {
    clearInterval(this.intervalId);
    const dialogRef = this.dialog.open(StopTrainingDialogComponent, {
      data: {
        progress: this.progress
      }
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.startOrResume();
      }
    })
  }
} 