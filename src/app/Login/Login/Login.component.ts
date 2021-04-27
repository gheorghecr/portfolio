import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../DialogContent/DialogContent.component';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  // Work that will be presented on the top Bar
  wordToPresent = 'Login';
  
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
      data: { username: '', password: '', registerPassword: '' },
    });

    // after dialog is closed logic
    dialogRef.afterClosed().subscribe((result) => {
      // call login functionality only when login button is pressed
      if   (typeof result == 'object') {
        console.log(result);
        this.addSuccessMessage();
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

}


