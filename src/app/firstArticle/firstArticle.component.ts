import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstArticle',
  templateUrl: './firstArticle.component.html',
  styleUrls: ['./firstArticle.component.css']
})
export class FirstArticleComponent implements OnInit {

  fileNameToDisplay = 'File Name Here';
  secondaryFileNameToDisplay = 'Secondary File Name Here';

  fileMetaData = [
    { key: 'Created by:', value: 'Gheorghe'},
    { key: 'Last Modified:', value: '21/02/2021'},
    { key: 'Created by:', value: 'Gheorghe2'},
    { key: 'Last Modified:', value: '22/02/2021'},
    { key: 'Created by:', value: 'Gheorghe3'},
    { key: 'Last Modified:', value: '23/02/2021'},
];

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
