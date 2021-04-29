import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-firstArticle',
  templateUrl: './firstArticle.component.html',
  styleUrls: ['./firstArticle.component.css'],
})
export class FirstArticleComponent implements OnInit {
  fileNameToDisplay = 'File Name Here';
  secondaryFileNameToDisplay = 'Secondary File Name Here';

  fileMetaData = [
    { key: 'Created by:', value: 'Gheorghe' },
    { key: 'Last Modified:', value: '21/02/2021' },
    { key: 'Created by:', value: 'Gheorghe2' },
    { key: 'Last Modified:', value: '22/02/2021' },
    { key: 'Created by:', value: 'Gheorghe3' },
    { key: 'Last Modified:', value: '23/02/2021' },
  ];

  pdfFileNameToPresent = './assets/Docs/manual5.pdf#toolbar=0';
  pdfFileNameToDownload = './assets/Docs/manual5.pdf';

  urlFileToPresent: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.urlFileToPresent = sanitizer.bypassSecurityTrustResourceUrl(this.pdfFileNameToPresent);
  }

  ngOnInit() {
  }

  /**
   * Download Button Clicked
   */
  downloadDocClicked() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = this.pdfFileNameToDownload;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  /**
   * Previous Document version Clicked
   */
  previousVersionClicked() {
    console.log('previousVersionClicked');
  }

  /**
   * Next Document version Button Clicked
   */
  nextVersionClicked() {
    console.log('nextVersionClicked');
  }
}
