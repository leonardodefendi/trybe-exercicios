interface Logger {
  log(l:string): void;
};

class ConsoleLogger implements Logger{
  log(l: string): void {
      console.log(l);
  }
}

class ConsoleLogger2 implements Logger {
  log(l: string): void {
    console.log('Logger2' + l)
  }
}

interface Database {
  Logger: Logger,
  save(key: string, value: string): void;
}

class ExampleDataBase implements Database {
  constructor(public Logger: Logger = new ConsoleLogger()) {}
  save(key: string, value: string): void {
      this.Logger.log(`Salvando o valor ${value}, na chave ${key}`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const db1 = new ExampleDataBase(logger1);
const db2 = new ExampleDataBase(logger2);
const db3 = new ExampleDataBase();


db1.save('chave 1', 'valor 1');
db2.save('chave 2', 'valor 2');
db3.save('chave 3', 'valor 3');