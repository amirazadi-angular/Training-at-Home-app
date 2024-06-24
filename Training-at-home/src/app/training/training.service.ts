import { Subject } from 'rxjs';
import { Iexercise } from '../interface/exercise.interface';

export class TrainingService {

    exerciseChange = new Subject<Iexercise>();

    private runningExercises!: Iexercise;

    private availableExercise: Iexercise[] = [
        {
            id: "Crunches", name: "Crunches", duration: 30, calories: 8,
        },
        {
            id: "Squat", name: "Squat", duration: 180, calories: 15,
        },
        {
            id: "side-lunges", name: "side-lunges", duration: 120, calories: 18,
        },
        {
            id: "Burpess", name: "Burpess", duration: 60, calories: 8,
        }
    ];

    getAvailabeExercises() {
        return this.availableExercise.slice();
    }

    startExercise(selectedId: string) {
        this.runningExercises = this.availableExercise.find(
            (exe) => exe.id === selectedId
        )!;
        this.exerciseChange.next({...this.runningExercises})
    }
}