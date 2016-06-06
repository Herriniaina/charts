import {Component} from '@angular/core';
import { ChartComponent } from './chart.component';
import { CORE_DIRECTIVES } from '@angular/common';
import {Router,Routes,ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'my-app',
  directives:[ChartComponent,CORE_DIRECTIVES,ROUTER_DIRECTIVES],
  template: `
   	<h1>Loocho Charts</h1>
    <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Type of the Graph
 	    <span class="caret"></span></button>
	    <ul class="dropdown-menu">
	      <li  *ngFor="let cType of charTypes"><a [routerLink]="['/', cType.name]">{{ cType.value }}</a></li>
	    </ul>
	  </div>
      <my-chart></my-chart>
      <router-outlet></router-outlet>
    `
})

@Routes([
  {path: '/:type', component: ChartComponent},
])

export class AppComponent { 
  public charTypes=[
    {
	  'name': 'BarChart',
	  'value': 'Bar Chart'
	},
	{
	  'name': 'BubbleChart',
	  'value': 'Bubble Chart'
	},
	{
	  'name': 'ColumnChart',
	  'value': 'Column Chart'
	},
	{
	  'name': 'LineChart',
	  'value': 'Line Chart'
	},
	{
	  'name': 'PieChart',
	  'value': 'Pie Chart'
	},
  ];

  public columns=[
    {
	  'name': 'contact',
	  'value': 'Contact'
	},
	{
	  'name': 'meeting',
	  'value': 'Meeting'
	}
  ];
}
