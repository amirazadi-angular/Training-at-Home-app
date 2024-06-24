export interface Iexercise {
    id: string;
    name: string;
    duration: number;
    calories: number;
    date?: Date;
    state?: 'complited' | 'canceled' | null;
}