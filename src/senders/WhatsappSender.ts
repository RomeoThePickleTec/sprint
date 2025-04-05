import { MessageSender } from "./MessageSender";

export class WhatsappSender implements MessageSender {
    sendMessage(content: string): void {
        console.log(`Whatsapp: ${content}`);
    }
}