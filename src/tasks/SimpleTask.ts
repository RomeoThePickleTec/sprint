import { Task } from "./Task";

export class SimpleTask extends Task {
    complete(realHours: number): void {
        console.log(`Task ${this.name} completed in ${realHours} hours`);
        this.sender.sendMessage(`Task ${this.name} completed in ${realHours} hours`);
    }
}