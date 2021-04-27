import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginData } from '../Login/LoginData';

/**
 * This is the component that is responsible for the modal view.
 * It's only used for the modal.
 */
@Component({
  selector: 'app-DialogContent',
  templateUrl: './DialogContent.component.html',
  styleUrls: ['./DialogContent.component.css'],
})
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
