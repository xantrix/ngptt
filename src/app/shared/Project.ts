import { Task } from './Task';

export interface Project {
    id: Symbol;
    code: string;
    name: string;
    description?: string;
    start: Date;
    end?: Date;
    priority: 'low' | 'medium' | 'high';
    done: boolean;
    tasks: Task[];
}