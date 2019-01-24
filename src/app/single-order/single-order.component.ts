import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {

  constructor() { }

  ordernumber: any=[{
    "OrderList": {
      "orderdetails": {
        "orderId": 1001,
        "productName": "Watch",
        "productDescription": "Blue dial large size",
        "materialUsed": "Fiber"
           },
      "orderAddress": {
        "pinCode": "500018",
        "city": "Hyderabad",
        "street1": "Madhapur inorbit",
        "street2": "Madhapur inorbit",
        "filed5": "Value1",
        "filed6": "Value1",
        "filed7": "Value1",
        "filed8": "Value1",
        "filed9": "Value1",
        "filed10": "Value1"
      },
      "orderContactDetails": {
        "filed1": "Value1",
        "filed2": "Value1",
        "filed3": "Value1",
        "filed4": "Value1",
        "filed5": "Value1",
        "filed6": "Value1",
        "filed7": "Value1",
        "filed8": "Value1",
        "filed9": "Value1",
        "filed10": "Value1"
      }
    }}];

  ngOnInit() {
  
  }
  

  

}
