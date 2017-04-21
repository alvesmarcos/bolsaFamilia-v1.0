import { Statement } from './statement';
import { Message } from './message';

export class User { 
  name: string;
  nis: string;
  message: Message[];
  statement: Statement[];

  constructor(){}

  addStatement(statement: Statement) {
    this.statement.push(statement);
  }

  addMessage(message: Message) {
    this.message.push(message);
  }
}
