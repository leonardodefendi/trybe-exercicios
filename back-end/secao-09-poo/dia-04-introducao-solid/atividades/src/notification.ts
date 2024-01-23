interface Notificator {
  sendNotification(message: string): void;
}

type TypeNot = {
  type: string,
  send: (message: string) => void
}

class ConsoleNotification implements Notificator {
  constructor(name: string) {}
  sendNotification(message: string): void {
    console.log()
  }
}
const consoleNotification: TypeNot = {
  type: 'Console',
  send: (message) => console.log('Console: ', message),
};

const emailNotification: TypeNot = {
  type: 'Email',
  send: (message) => console.log('Email: ', message),
};

const phoneNotification: TypeNot = {
  type: 'Phone',
  send: (message) => console.log('Phone: ', message),
};

const notifications: TypeNot[] = [consoleNotification, emailNotification, phoneNotification];

export default function progressNotification(message: string, type_='Console', notificationsArray: TypeNot[]) {
  notificationsArray.forEach((notification) => {
    if(notification.type === type_) {
      notification.send(message);
    }
  })
}

progressNotification('Testando mensagem', 'Email', notifications);
