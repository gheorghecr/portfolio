import { Component, OnInit, Injectable } from '@angular/core';
import { projects, Projects } from './projectsList/projects';

import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('slideLeftToRight', [
      transition(':enter', [
        style({transform: 'translateX(-100%)', opacity: 0.2}),
        animate('1000ms ease-in', style({transform: 'translateX(0%)', opacity: 1}))
      ]),
    ]),
    trigger('slideRightToLeft', [
      transition(':enter', [
        style({transform: 'translateX(100%)', opacity: 0.2}),
        animate('1000ms ease-in', style({transform: 'translateX(0%)', opacity: 1}))
      ]),
    ])
  ]
})

@Injectable({
  providedIn: 'root'
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = [];

  constructor() {
    this.projects = projects;
   }

  ngOnInit() {
  }

}
