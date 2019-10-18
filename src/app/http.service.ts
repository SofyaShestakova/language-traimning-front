import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
sendForm(arg):void{
  console.log(arg);
}
  constructor() { }
}
