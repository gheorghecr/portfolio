import { Component, OnInit, Inject } from '@angular/core';
import { LoginData } from '../Login/Login.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * This is the component that is responsible for the modal view.
 * It's only used for the modal.
 */
@Component({
  selector: 'app-DialogContent',
  templateUrl: './DialogContent.component.html',
  styleUrls: ['./DialogContent.component.css']
})
export class DialogContentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginData) {

    }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
