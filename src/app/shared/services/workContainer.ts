import {Injectable, OnInit} from '@angular/core';
import {Work} from '../interfaces';
@Injectable({providedIn: 'root'})

export class WorkContainer implements OnInit{

  works: Work[] = [];

  ngOnInit(): void {
  }

}
