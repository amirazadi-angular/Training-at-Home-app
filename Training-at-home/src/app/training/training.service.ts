import { Subject } from 'rxjs';
import { Iexercise } from '../interface/exercise.interface';

export class TrainingService {

    exerciseChange = new Subject<Iexercise | null>();

    private runningExercises!: Iexercise | null;

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
    private exercises: Iexercise[] = [
        {
            id: "Crunches", name: "Crunches", duration: 30, calories: 8,
        },
        {
            id: "Squat", name: "Squat", duration: 180, calories: 15,
        },
    ];

    getAvailabeExercises() {
        return this.availableExercise.slice();
    }

    startExercise(selectedId: string) {
        this.runningExercises = this.availableExercise.find(
            (exe) => exe.id === selectedId
        )!;
        this.exerciseChange.next({ ...this.runningExercises })
    }

    getRuningExercise() {
        return { ...this.runningExercises }
    }

    cancelExercise(progress: number) {
        this.exercises.push
            ({
                ...this.runningExercises!,
                date: new Date(),
                state: 'canceled',
                duration: this.runningExercises!.duration! * (progress / 100),
                calories: this.runningExercises!.calories! * (progress / 100)
            });
        this.runningExercises = null;
        this.exerciseChange.next(null);
    }

    compliteExercise() {
        this.exercises.push({
            ...this.runningExercises!,
            date: new Date(),
            state: 'complited'
        });
        this.runningExercises = null;
        this.exerciseChange.next(null);
    }

    getCompliteOrCancel() {
        return [...this.exercises]
    }
}