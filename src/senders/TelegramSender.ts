import { MessageSender } from "./MessageSender";

export class TelegramSender implements MessageSender {
    sendMessage(content: string): void {
        console.log(`Telegram: ${content}`);
    }
}