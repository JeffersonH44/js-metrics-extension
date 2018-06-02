import { Component } from '@angular/core';

// webpack html imports
const doc = require('html-loader!markdown-loader!../../doc.md');

@Component({
  selector: 'vizabi-main-section',
  template: `
    <section [attr.id]="name">
      <div class="row">

        <vizabi-section [ts]="desc.bubbleChart.ts" [html]="desc.bubbleChart.html" [heading]="desc.bubbleChart.heading">
          <bubble-chart-demo></bubble-chart-demo>
        </vizabi-section>
      </div>
      <br>
    </section>
  `
})

export class VizabiMainSectionComponent {
  name = 'Vizabi';
  src = 'https://github.com/vizabi/ng2-vizabi/blob/src/vizabi/vizabi.ts';
  doc = doc;
  desc = {
    bubbleChart: {
      heading: 'Bubble Chart',
      id: 'bubbleChart',
      ts: require('!!raw-loader?lang=typescript!./vizabi/bubble-chart-demo.component.ts'),
      html: require('!!raw-loader?lang=markup!./vizabi/bubble-chart-demo.component.html')
    }
  };
}
