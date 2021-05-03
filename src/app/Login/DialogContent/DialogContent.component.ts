import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginData } from '../Login/LoginData';

@Component({
  selector: 'app-DialogContent',
  templateUrl: './DialogContent.component.html',
  styleUrls: ['./DialogContent.component.css'],
})

/**
 * This is the component that is responsible for the login modal view.
 */
export class DialogContentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginData
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
