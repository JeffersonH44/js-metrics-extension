import { Component, AfterContentInit } from '@angular/core';

const gettingStarted = require('html-loader!markdown-loader!../getting-started.md');

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <vizabi-main-section class="col-md-12"></vizabi-main-section>
    </div>
    `
})
export class AppComponent implements AfterContentInit {
  gettingStarted: string = gettingStarted;

  ngAfterContentInit(): any {
    setTimeout(() => {
      if (typeof PR !== 'undefined') {
        // google code-prettify
        PR.prettyPrint();
      }
    }, 150);
  }
}
