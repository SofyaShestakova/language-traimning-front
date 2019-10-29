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

export interface User {
    username: string;
    password: string;
}

export interface SpringAuthResponse {
  token: string;
}

export interface Text {
  textId?: string;
  title: string;
  text: string;
}

export interface Work {
  text: string;
  workType;

}
