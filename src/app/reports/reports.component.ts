import { Component, OnInit } from '@angular/core';
 import  Chart  from 'chart.js';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  chart:any = [];
  
  
  constructor() {
  }

  ngOnInit() {
    let temp_max:number=300;
  let temp_min:number=200;

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: Date,
        datasets: [{
          data: temp_max,
          borderColor: '#3cba9f',
          fill: false
        },
        {
          data: temp_min,
          borderColor: '#ffcc00',
          fill: false
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    })
    console.log("---------->"+this.chart.temp_min)
  }

  


}
