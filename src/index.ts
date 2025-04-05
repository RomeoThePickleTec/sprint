import { Database } from "./database/Database";
import { TelegramSender } from "./senders/TelegramSender";
import { Task } from "./tasks/Task";
import { TaskFactory } from "./factories/TaskFactory";
import { SlackSender } from "./senders/SlackSender";
import { WhatsappSender } from "./senders/WhatsappSender";
import { DiscordSender } from "./senders/DiscordSender";


const sender = new TelegramSender();
const slack = new SlackSender();
const whatsapp = new WhatsappSender();
const discord = new DiscordSender();
const db = Database.getInstance();

const task1 = TaskFactory.createTask("Task 1", 10, sender);

task1?.complete(5);

const task2 = TaskFactory.createTask("Task 2", 2, slack);

const task3 = TaskFactory.createTask("Task 3", 8, discord);

const task4 = TaskFactory.createTask("Task 4", 3, whatsapp);
task4?.complete(3);

task3?.complete(5);
task2?.complete(2);


db.addTask(task1);
db.addTask(task2); 
db.addTask(task3);
db.addTask(task4);

console.log(db.getTasks());

