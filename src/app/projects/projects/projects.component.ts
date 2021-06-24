import { Component, OnInit, Injectable } from '@angular/core';
import { projects, Projects } from './projectsList/projects';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { trigger, transition, animate, style } from '@angular/animations'
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsDialogComponent } from 'src/app/ProjectDetailsDialog/projectDetailsDialog/projectDetailsDialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [MessageService],
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

  constructor(
    public dialog: MatDialog,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
  ) {
    this.projects = projects;
   }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  /**
   * Open Dialog with project details
   */
   openProjectDetailsDialog( projectID: Number) {
     console.log(projectID);
    this.dialog.open(ProjectDetailsDialogComponent, {
      maxWidth: '85%',
      minWidth: '80%',
      maxHeight: '90%',
      data: { username: '', password: '', registerPassword: '' },
    });
  }
}
