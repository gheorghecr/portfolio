import { Component, OnInit } from '@angular/core';
import {  faRunning, faDog, faFutbol } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  
  faRunning = faRunning;
  faDog = faDog;
  faFutbol = faFutbol;

  constructor() { }

  ngOnInit() {
  }

}
