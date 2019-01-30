import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  dataSource:any = [];
  dataSourcePi:any = [];
  
  constructor() {
    this.dataSource ={
    "chart": {
      "caption": "Single order",
      // "subCaption": "In MMbbl = One Million barrels",
      "xAxisName": "Date",
      "yAxisName": "Time",
      "numberSuffix": "hrs",
      "theme": "fusion",
  },
  // Chart Data
  "data": [{
      "label": new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      "value": "10"
  }, {
      "label": new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      "value": "11"
  }, {
      "label": new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      "value": "12"
  }, {
      "label": new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      "value": "14"
  }, {
      "label": new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      "value": "50"
  }, {
      "label": new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      "value": "60"
  }, {
      "label": new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      "value": "70"
  }, {
      "label": new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      "value": "80"
  }]
}; // end of this.dataSource

//Pi Chart
this.dataSourcePi = {
  "chart": {
      "caption": "Split of order",
      // "subCaption": "Last year",
      "use3DLighting": "0",
      "showPercentValues": "1",
      "decimals": "1",
      "useDataPlotColorForLabels": "1",
      "theme": "fusion"
  },
  "data": [
      {
          "label": "Single Order",
          "value": "40"
      },
      {
          "label": "Multiple Order",
          "value": "60"
      }
  ]
};

  }

  ngOnInit() {
   }
  }