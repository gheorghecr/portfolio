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
   * Open Dialog to add a new event
   */
   openDialogLogin() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      maxWidth: '800px',
      minWidth: '400px',
      maxHeight: '600px',
      data: { username: '', password: '', registerPassword: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.addSuccessMessage();
    });
  }

  addSuccessMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Login Successfully',
      detail: '',
    });
  }

  clearMessages() {
    this.messageService.clear();
  }

}

export interface LoginData {
  username: string;
  password: string;
  registerPassword: string;
}
