import { Component, Input } from '@angular/core';

@Component({
  selector: 'vizabi-section',
  template: `
    <section style="padding-top: 50px;">
      <div class="card card-block panel panel-default panel-body">
        <div class="row">
          <div class="col-md-12">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </section>
  `
})
export class VizabiSectionComponent {
  @Input() ts: string;
  @Input() html: string;
  @Input() heading: string;
}
