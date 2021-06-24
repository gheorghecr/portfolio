import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Projects } from 'src/app/projects/projects/projectsList/projects';

@Component({
  selector: 'app-projectDetailsDialog',
  templateUrl: './projectDetailsDialog.component.html',
  styleUrls: ['./projectDetailsDialog.component.css']
})
export class ProjectDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<ProjectDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Projects) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
