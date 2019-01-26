import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-order',
  templateUrl: './multiple-order.component.html',
  styleUrls: ['./multiple-order.component.css']
})
export class MultipleOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  multipleOrder:any=[{"r1":"Row Item11","r2":"Row Item12","r3":"Row Item13","r4":"Row Item14","r5":"Row Item15"},
  {"r1":"Row Item11","r2":"Row Item12","r3":"Row Item13","r4":"Row Item14","r5":"Row Item15"},
  {"r1":"Row Item11","r2":"Row Item12","r3":"Row Item13","r4":"Row Item14","r5":"Row Item15"},
  {"r1":"Row Item11","r2":"Row Item12","r3":"Row Item13","r4":"Row Item14","r5":"Row Item15"},
  {"r1":"Row Item11","r2":"Row Item12","r3":"Row Item13","r4":"Row Item14","r5":"Row Item15"}];

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

    log:any=[{"time":"hh:mm:AM","Date":"dd/mm/yy","status":"dd/mm/yy","Description":"Discription1"},
    {"time":"hh:mm:AM","Date":"dd/mm/yy","status":"dd/mm/yy","Description":"Discription1"},
    {"time":"hh:mm:AM","Date":"dd/mm/yy","status":"dd/mm/yy","Description":"Discription1"},
    {"time":"hh:mm:AM","Date":"dd/mm/yy","status":"dd/mm/yy","Description":"Discription1"},
    {"time":"hh:mm:AM","Date":"dd/mm/yy","status":"dd/mm/yy","Description":"Discription1"},
    {"time":"hh:mm:AM","Date":"dd/mm/yy","status":"dd/mm/yy","Description":"Discription1"},
    {"time":"hh:mm:AM","Date":"dd/mm/yy","status":"dd/mm/yy","Description":"Discription1"},
    {"time":"hh:mm:AM","Date":"dd/mm/yy","status":"dd/mm/yy","Description":"Discription1"},
    {"time":"hh:mm:AM","Date":"dd/mm/yy","status":"dd/mm/yy","Description":"Discription1"},
    {"time":"hh:mm:AM","Date":"dd/mm/yy","status":"dd/mm/yy","Description":"Discription1"},
    {"time":"hh:mm:AM","Date":"dd/mm/yy","status":"dd/mm/yy","Description":"Discription1"},
    {"time":"hh:mm:AM","Date":"dd/mm/yy","status":"dd/mm/yy","Description":"Discription1"},
    {"time":"hh:mm:AM","Date":"dd/mm/yy","status":"dd/mm/yy","Description":"Discription1"}]

}
