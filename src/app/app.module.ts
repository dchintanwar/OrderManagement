import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SingleComponentComponent } from './single-component/single-component.component';
import { SingleOrderComponent } from './single-order/single-order.component';
import { MultipleOrderComponent } from './multiple-order/multiple-order.component';
import { ReportsComponent } from './reports/reports.component';
import{ DataTablesModule } from 'angular-datatables';
import{BsDatepickerModule} from 'ngx-bootstrap/datepicker';
//importing angular fusion charts
import {FusionChartsModule} from 'angular-fusioncharts';

//import fusioncharts library and chart module
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

FusionChartsModule.fcRoot(FusionCharts,Charts,FusionTheme)

//pass fusioncharts library and module

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    SingleComponentComponent,
    SingleOrderComponent,
    MultipleOrderComponent,
    ReportsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
