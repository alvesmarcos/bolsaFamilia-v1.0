export const enum StatementStatus {
  BLOCKED,
  RELEASED,
  PAID
}

export class Statement {
  month: string;
  status: StatementStatus;
  
  constructor(){}
}
