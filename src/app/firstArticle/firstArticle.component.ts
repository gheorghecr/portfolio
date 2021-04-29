import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstArticle',
  templateUrl: './firstArticle.component.html',
  styleUrls: ['./firstArticle.component.css']
})
export class FirstArticleComponent implements OnInit {

  fileNameToDisplay = 'File Name Here';
  secondaryFileNameToDisplay = 'Secondary File Name Here';

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
