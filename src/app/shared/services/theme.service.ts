import {Injectable} from '@angular/core';
import {Theme} from '../interfaces';

@Injectable({providedIn: 'root'})
export class ThemeService {
  themes: Theme[] = [
    {
      id: 1,
      title: "Иформатика 27 задача",
      messages : [{
        id: 1,
        text: "я решил",
        date: new Date(),
        answers: [{
          id: 1,
          text: "красава!",
          date: new Date(),
        }]
      }]
    },

    {
      id: 2,
      title: "Математика 16 задача",
      messages : [{
        id: 2,
        text: "памагите",
        date: new Date(),
        answers: []
      }]
    },
  ];

  getById(id: number){
    return this.themes.find( theme => theme.id === id);
  }
}
