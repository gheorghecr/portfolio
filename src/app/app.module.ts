import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './Login/Login/Login.component';
import { DialogContentComponent } from './Login/DialogContent/DialogContent.component';
import { ProgressSpinnerComponent } from './ProgressSpinner/ProgressSpinner/ProgressSpinner.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, }  from '@angular/material/button';
import { MatSidenavModule, }  from '@angular/material/sidenav';
import { MatToolbarModule, }  from '@angular/material/toolbar';
import { MatIconModule, }  from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { ButtonModule } from 'primeng/button';
import { ToastModule }  from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RouterModule } from '@angular/router';
import { FirstArticleComponent } from './FirstArticle/FirstArticle/FirstArticle.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    DialogContentComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    ButtonModule,
    ToastModule,
    RippleModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    MatDialogModule, 
    FormsModule,
    ProgressSpinnerModule,
    FirstArticleComponent,
    RouterModule.forRoot([
      { path: "firstArticle", component: ProgressSpinnerComponent },
      // { path: "multipleThermometer", component: MultipleThermometersComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

