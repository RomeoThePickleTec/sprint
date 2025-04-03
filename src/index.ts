import { Database } from "./database/Database";
import { TelegramSender } from "./senders/TelegramSender";
import { Task } from "./tasks/Task";
import { TaskFactory } from "./factories/TaskFactory";


const sender = new TelegramSender();
const db = Database.getInstance();

const task1 = TaskFactory.createTask("Task 1", 10, sender);

task1?.complete(5);

const task2 = TaskFactory.createTask("Task 2", 2, sender);
task2?.complete(2);

db.addTask(task1);
db.addTask(task2); 

console.log(db.getTasks());

