import { MessageSender } from "./MessageSender";

export class DiscordSender implements MessageSender {
    sendMessage(content: string): void {
        console.log(`Discord: ${content}`);
    }
}