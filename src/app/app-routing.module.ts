import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashBoardComponent } from './dash-board/dash-board.component';
import { SingleComponentComponent } from './single-component/single-component.component';
import { SingleOrderComponent } from './single-order/single-order.component';
import { MultipleOrderComponent } from './multiple-order/multiple-order.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'reports',component:ReportsComponent},
  {path:'singleorder',component:SingleOrderComponent},
  {path:'multipleorder',component:MultipleOrderComponent},
  {path:'dashboard',component:DashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }














