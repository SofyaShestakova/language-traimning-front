export interface Message {
  id?: number;
  text: string;
  date?: Date;
  answers?: Answer[];
}

export interface Answer {
  id?: number;
  text:string;
  date: Date;
}

export interface Theme {
  id?: number;
  title: string;
  messages?: Message[];
  text?: string;
}

export interface User {
    username: string;
    password: string;
    bio?: string;
    screenName?: string;
}

export interface SpringAuthResponse {
  token: string;
}

export interface Text {
  textId: string;
  title: string;
  text: string;
}

export interface Work {
  workId?: string;
  textId?: string
  title: string;
  type: string;
  text: string;
  authorId?: string
}
export interface Assesment{
  workId:number;
  mark:number;
  comment:string;
  editDate:Date;
  createDate:Date;
  expertId:number;
  assesmentId:number
}
