import { Component } from '@angular/core';
import { cloneDeep } from 'lodash';
import { start } from 'repl';

const query = require('vizabi-config-systema_globalis/dist/BubbleChart.json');
const startPath = 'vscode-resource:/home/jefferson/WebstormProjects/js-metrics-extension/out/view/';

declare const DDFCsvReader: any;

@Component({
  selector: 'bubble-chart-demo',
  templateUrl: './bubble-chart-demo.component.html'
})
export class BubbleChartDemoComponent {
  readerModuleObject: any;
  readerGetMethod: string;
  readerPlugins: any[];
  readerName: string;
  model: any;
  modelHash: string;
  chartType: string;
  stopUrlRedirect: boolean;
  additionalItems: any[] = [];
  reloadTime;
  restoreAfterReload = false;

  constructor() {
    const hashPos = location.href.indexOf('#');

    this.readerModuleObject = DDFCsvReader;
    this.readerGetMethod = 'getDDFCsvReaderObject';
    // this.readerPlugins = [new DDFCsvReader.FrontendFileReader(), console];
    this.readerPlugins = [new DDFCsvReader.FrontendFileReader()];
    this.readerName = 'ddf1-csv-ext';
    this.model = cloneDeep(query);
    this.model.data = {
      reader: 'ddf1-csv-ext',
      splash: true,
      path: `${startPath}ddf/`,
      ddfPath: `${startPath}ddf/`
    };
    this.model.locale = {
      id: 'en',
      filePath: `${startPath}translation/`
    };
    this.modelHash = hashPos >= 0 ? location.href.substring(hashPos + 1) : '';
    this.chartType = 'BubbleChart';
    this.stopUrlRedirect = true;
    console.log("model", this.model);
  }

  loadAdditionalData() {
    this.additionalItems = [
      {
        reader: 'csv',
        path: `${startPath}/extra-data/ddf--datapoints--migrant_stock--by--geo--time.csv`
      },
      {
        reader: 'csv',
        path: `${startPath}/extra-data/basic-indicators.csv`
      }
    ];
  }

  reload() {
    this.reloadTime = new Date().getTime();
  }

  onChartCreated(event: any) {
    console.log('bubble chart was created', event);
  }

  onChartChanged(event: any) {
    console.log('bubble chart was changed', event);
  }

  onChartClicked(event: any) {
    console.log('click on bubble chart', event);
  }

  onChartError(event: any) {
    console.log('bubble chart error', event);
  }
}
