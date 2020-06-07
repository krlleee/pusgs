import { Component, OnInit,Input } from '@angular/core';
import{FlightData} from 'src/app/_models/flightData';
import {Router} from '@angular/router';
import{FlightInfo} from 'src/app/_models/flightInfo';

@Component({
  selector: 'app-filteredcards',
  templateUrl: './filteredcards.component.html',
  styleUrls: ['./filteredcards.component.scss']
})
export class FilteredcardsComponent implements OnInit {
  @Input() FlightInfo:FlightInfo;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onReserveView(){

    this.router.navigate(['reserve/'+this.FlightInfo.id]);
  }

}
