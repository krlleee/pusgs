import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FlightInfo } from '../_models/flightInfo';
import { Validators } from '@angular/forms';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.scss']
})
export class AddflightComponent implements OnInit {

  model: any={};

  
  constructor(private service:FlightService) { }

  ngOnInit(): void {
  }

  add(){
    this.service.addFlight(this.model).subscribe((result)=>{console.log("POVEZAO");})
  }

}
