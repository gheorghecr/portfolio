import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { LinkButtonsComponent } from './linkButtons/linkButtons/linkButtons.component';
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
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ProjectsComponent } from './projects/projects/projects.component';
import { InterestsComponent } from './Interests/interests/interests.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectDetailsDialogComponent } from './ProjectDetailsDialog/projectDetailsDialog/projectDetailsDialog.component';

@NgModule({
  declarations: [	
    AppComponent,
    ProjectsComponent,
    HeaderComponent,
    LinkButtonsComponent,
    InterestsComponent,
    ProjectDetailsDialogComponent
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
    CardModule,
    DividerModule,
    ScrollPanelModule,
    AvatarModule,
    AvatarGroupModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: "home", component: AppComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

