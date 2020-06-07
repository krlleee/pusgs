import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { FlightInfo } from '../_models/flightInfo';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import {FlightService} from '../services/flight.service'
import { FilteredComponent } from '../filtered/filtered.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rentflight',
  templateUrl: './rentflight.component.html',
  styleUrls: ['./rentflight.component.scss']
})
export class RentflightComponent implements OnInit {
  flights:FlightInfo[]=[];
  flightfound: FlightInfo = new FlightInfo();
  flight: FlightInfo = new FlightInfo();
  registerForm = this.fb.group({
    Id:['', Validators.required],
    City1: ['', Validators.required],
    City2: ['', Validators.required],
    City1short: ['', Validators.required],
    City2short: ['', Validators.required],
    Time1: ['', Validators.required],
    Time2: ['', Validators.required],
    Photo: ['', Validators.required],
    Flighttime: ['', Validators.required],
    Triptype: ['', Validators.required],
    Persons: ['', Validators.required],
    Class: ['', Validators.required],
    Price: ['', Validators.required],
    Date1: ['', Validators.required],
    Date2:['', Validators.required],
  });
  constructor(private service:FlightService,private fb:FormBuilder, private data: DataService,private router: Router) { }


  ngOnInit(): void {
    this.service.getAllFlights().subscribe(res=>{
      
      this.flights=res
      
    });
    


  }

  onSubmit(){
   
    let FlightToFind : FlightInfo = this.registerForm.value;
    
    this.service.getFlight(FlightToFind).subscribe(respons=>{
      this.data.changeData(respons);
      
    });
    
  }

  deleteRow(id)
  {
    
    let flight=this.flights.find(x=>x.id==id);

    let ind=this.flights.indexOf(flight);
    
    console.log(id);
    this.flights.splice(ind,1);
    this.service.deleteFlight(id).subscribe();
    
    
  }

  onFlightView(id)
  {
    this.router.navigate(['editflight/' + id]);
  }

  
  
}
