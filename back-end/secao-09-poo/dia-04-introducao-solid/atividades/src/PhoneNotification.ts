import Notificator from "./Notificator";

export default class PhoneNotification implements Notificator {
  constructor(private phone: number) {}
  sendNotification(message: string): void {
    console.log(`Here we go again - ${message} from ${this.phone}`);
  }
}