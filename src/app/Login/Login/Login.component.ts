import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogContentComponent } from '../DialogContent/DialogContent.component';
import { ProgressSpinnerComponent } from 'src/app/ProgressSpinner/ProgressSpinner/ProgressSpinner.component';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  // Work that will be presented on the top Bar
  wordToPresent = 'Login';

  private dialogRefForProgressSpinner!: MatDialogRef<ProgressSpinnerComponent, any>;
  
  constructor(
    public dialog: MatDialog,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig, 
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  /**
   * Open Dialog to allow the user to log in
   */
   openDialogLogin() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      maxWidth: '800px',
      minWidth: '400px',
      maxHeight: '600px',
      data: { username: '', password: '' },
    });

    // after dialog is closed logic
    dialogRef.afterClosed().subscribe((result) => {
      // call login functionality only when login button is pressed
      if   (typeof result == 'object') {
        console.log(result);
        this.performLogin(result.username, result.password);
      } 
    });
  }

  /**
   * Adds a pop up message giving user feedback on successfully login
   */
  addSuccessMessage() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Login Successfully'});
  }

  /**
   * Clear any pop up messages
   */
  clearMessages() {
    this.messageService.clear();
  }

  /**
   * Function that will contains the logic to call the functionality to login
   * @param username (String) username of the user
   * @param password (String) password of the user
   */
  private performLogin(username: string , password: string) {
    this.openDialogProgressSpinner();
    setTimeout(() => {  
      this.dialogRefForProgressSpinner.close(); // close progressSpinnerDialog 
      this.addSuccessMessage();
     }, 2000);
  }


  /**
   * Open Dialog to allow the user to log in
   */
   openDialogProgressSpinner() {
    this.dialogRefForProgressSpinner = this.dialog.open(ProgressSpinnerComponent, {
      maxWidth: '400px',
      minWidth: '200px',
      maxHeight: '300px',
      data: { title: 'Please wait...'},
    });
  }
}


