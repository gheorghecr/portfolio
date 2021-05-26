import { Component, OnInit, Injectable } from '@angular/core';
import { projects, Projects } from './projectsList/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
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
