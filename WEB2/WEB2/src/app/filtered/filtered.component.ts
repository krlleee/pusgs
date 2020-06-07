import { Component, OnInit } from '@angular/core';
import {FlightData} from '../_models/flightData';
import {FlightInfo} from '../_models/flightInfo';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.scss']
})
export class FilteredComponent implements OnInit {
  flightList: FlightInfo[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   this.dataService.currentData.subscribe(res => { 
     this.flightList = res;
     console.log(this.flightList);
   })
  }

 

}
