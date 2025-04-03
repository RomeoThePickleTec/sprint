import { Task } from './Task';
/**
 * Composite is a structural design pattern that lets you 
 * compose objects into tree structures and then work 
 * with these structures as if they were individual objects.
 */

export class CompositeTask extends Task {
    private subtasks: Task[] = [];

    addSubtask(task: Task): void {
        this.subtasks.push(task);
    }

    complete(realHours: number): void {
        console.log(`Composite task ${this.name} completed in ${realHours} hours`);
        this.subtasks.forEach(task => task.complete(realHours/this.subtasks.length));
    }
}