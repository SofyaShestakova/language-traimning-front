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

export interface Theme {
  id?: number;
  title: string;
  messages: Message[];
}
