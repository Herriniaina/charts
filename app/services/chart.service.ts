import { Injectable } from '@angular/core';
import {CHARTDATAS,CHARTOPTIONS} from './chart.data';

@Injectable()
export class ChartService {

  getDatas(){
    return Promise.resolve(CHARTDATAS);
  }

  getOptions(){
    return Promise.resolve(CHARTOPTIONS);
  }

}