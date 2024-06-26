import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TrainingService } from '../training/training.service';
import { MatTableDataSource } from '@angular/material/table';
import { Iexercise } from '../interface/exercise.interface';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrl: './past-training.component.css'
})
export class PastTrainingComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<Iexercise>

  displayedColumns: string[] = ['Name', 'Duration', 'Calories', 'Date', 'State'];

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private trainingService: TrainingService) { };

  ngOnInit(): void {
    this.dataSource.data = this.trainingService.getCompliteOrCancel();
  };

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  };
  
  applayFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}