import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})

/**
 * This is the component that is responsible for the navigation menu. 
 * And for the layout for the website. 
 */
export class MainNavComponent {
  
  showSubMenuA4: boolean = false;
  showSubMenuA5: boolean = false;
  showSubMenuA6: boolean = false;
  showSubMenuA7: boolean = false;
  showSubMenuA75: boolean = false;
  showSubMenuA8: boolean = false;
  showSubMenuA9: boolean = false;
  showSubMenuA10: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
