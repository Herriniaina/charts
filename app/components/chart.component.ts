import {Component} from '@angular/core';
import {Router,Routes,ROUTER_DIRECTIVES,RouteSegment} from '@angular/router';
import {ChartDirective} from '../directives/chart.directive';
import { ChartService } from '../services/chart.service';

@Component({
    selector: 'my-chart',
    directives:[ChartDirective],
    providers:[ChartService],
    template: `
		<div id="line_chart" [chartData]="line_ChartData" [chartOptions] = "line_ChartOptions" [chartType]="id" GoogleChart></div>
    `
})

export class ChartComponent {
   
   constructor(private _chartService: ChartService){};
   public id="ColumnChart";
   public line_ChartData= this._chartService.getDatas().then(datas => this.line_ChartData = datas);
   public line_ChartOptions = this._chartService.getOptions().then(datas => this.line_ChartOptions = datas);
   
   routerOnActivate(type: RouteSegment) : void { 
     this.id = type.getParam("type");
   }
}
