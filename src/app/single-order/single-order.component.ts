import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  oredrnumber:string;
}