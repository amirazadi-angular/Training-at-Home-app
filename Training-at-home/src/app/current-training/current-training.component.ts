import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingDialogComponent } from './stop-training-dialog/stop-training-dialog.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.css',
})
export class CurrentTrainingComponent implements OnInit {
  progress: number = 0;
  intervalId: any;

  constructor(private dialog:MatDialog ) { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  stopProgress() {
    clearInterval(this.intervalId);
    this.dialog.open(StopTrainingDialogComponent);
  }
} 