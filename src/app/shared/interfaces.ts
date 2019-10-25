export interface Message {
  id?: number;
  text: string;
  date: Date;
  answers: Answer[];
}

export interface Answer {
  id?: number;
  text:string;
  date: Date;
}
