import { map, Subject } from 'rxjs';
import { Iexercise } from '../interface/exercise.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export class TrainingService {

    constructor(private db: AngularFirestore) { };

    exerciseChange = new Subject<Iexercise | null>();

    exercisesChange = new Subject<Iexercise[]>();

    private runningExercises!: Iexercise | null;

    private availableExercise: Iexercise[] = [

    ];
    private exercises: Iexercise[] = [
        {
            id: "Crunches", name: "Crunches", duration: 30, calories: 8,
        },
        {
            id: "Squat", name: "Squat", duration: 180, calories: 15,
        },
    ];

    fetchAvailabeExercises() {
        this.db.collection('exercises').snapshotChanges().pipe(
            map(docArray => {
                return docArray.map(doc => {
                    return {
                        id: doc.payload.doc.id,
                        name: (doc.payload.doc.data() as any).name,
                        duration: (doc.payload.doc.data() as any).duration,
                        calories: (doc.payload.doc.data() as any).calories
                    };
                });
            })
        ).subscribe((exercises: Iexercise[]) => {
            this.availableExercise = exercises;
            this.exercisesChange.next([...this.availableExercise]);
        });
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