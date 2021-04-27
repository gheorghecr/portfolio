import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstArticle',
  templateUrl: './firstArticle.component.html',
  styleUrls: ['./firstArticle.component.css']
})
export class FirstArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * Download Button Clicked
   */
   downloadDocClicked() {
    console.log("downloadDocClicked")
  }

  /**
   * Previous Document version Clicked
   */
   previousVersionClicked() {
    console.log("previousVersionClicked")
  }

  /**
   * Next Document version Button Clicked
   */
   nextVersionClicked() {
    console.log("nextVersionClicked")
  }

}
