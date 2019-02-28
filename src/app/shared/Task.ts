export interface Task {
    id: Symbol;
    name: string;
    start: Date;
    duration: number;
    isBillable: boolean;
}