import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpinnerData } from './DataForSpinnerView';

@Component({
  selector: 'app-ProgressSpinner',
  templateUrl: './ProgressSpinner.component.html',
  styleUrls: ['./ProgressSpinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {

  titleToPresent = '';

  constructor(
    public dialogRef: MatDialogRef<ProgressSpinnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SpinnerData
  ) {
    this.titleToPresent = data.title;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

}
