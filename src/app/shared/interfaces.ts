export interface Message {
  id?: number;
  text: string;
  date?: Date;
  answers?: Answer[];
}

export interface Answer {
  id?: number;
  text: string;
  date: Date;
}

export interface Theme {
  id?: number;
  title: string;
  messages?: Message[];
  text?: string;
}

export interface User {
  userId: number,
  username: string;
  email: string;
  avatarUrl: string;
  role: string;
}

export interface UserDetails {
  level: number;
  screenName: string;
  rating: number;
  bio: string;
  createDate: number;
  editDate: number;
}

export interface AuthenticationResponse {
  status: string;
  username: string;
  userId: number;
  token: string;
}

export interface Text {
  textId: string;
  title: string;
  text: string;
}

export interface Work {
  workId: number;
  title: string;
  text: string;
  textId: number;
  authorId: number;
  type: number;
  editDate: number;
  createDate: number;
  rating:number;
}

export interface Assesment {
  workId: number;
  mark: number;
  comment: string;
  editDate: Date;
  createDate: Date;
  expertId: number;
  assessmentId: number
}
