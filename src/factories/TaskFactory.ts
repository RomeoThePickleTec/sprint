/**
 * TaskFactory
 * Factory Method is a creational design pattern 
 * that provides an interface for creating objects 
 * in a superclass, but allows subclasses to alter 
 * the type of objects that will be created.
 */
import { MessageSender } from "../senders/MessageSender";
import { CompositeTask } from "../tasks/CompositeTask";
import { SimpleTask } from "../tasks/SimpleTask";

export class TaskFactory {
    static createTask(name: string, estimatedHours: number, sender: MessageSender) {
        if(estimatedHours > 4 ) {
            console.log("Se creará una tarea compuesta");
            const compositeTask = new CompositeTask(name, estimatedHours, sender);
            for(let i = 0; i < estimatedHours/4; i++) {
                compositeTask.addSubtask(new SimpleTask(`${name} - subtask ${i}`, 4, sender));
            }
            return compositeTask;
        }
        else {
            console.log("Se creará una tarea simple");
            return new SimpleTask(name, estimatedHours, sender);
        }
    }
}