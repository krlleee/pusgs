import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FlightInfo } from '../_models/flightInfo';
import { FlightService } from '../services/flight.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editflight',
  templateUrl: './editflight.component.html',
  styleUrls: ['./editflight.component.scss']
})
export class EditflightComponent implements OnInit {

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

  constructor(private service:FlightService,private fb:FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      this.service.getFlightbyId(res.id).subscribe((res)=>{
        console.log(res);
        this.flight=res;
        this.registerForm.patchValue({
         Id:this.flight.id,
         City1:this.flight.city1,
         City2:this.flight.city2,
         City1short:this.flight.city1short,
         City2short:this.flight.city2short,
         Time1:this.flight.time1,
         Time2:this.flight.time2,
         Photo:this.flight.photo,
         Flighttime:this.flight.flighttime,
         Triptype:this.flight.triptype,
         Persons:this.flight.persons,
         Class:this.flight.class,
         Date1:this.flight.date1,
         Date2:this.flight.date2,
         Price:this.flight.price

         
        })
      });
    });

    

  }
  onSubmit(){
    let flightToEdit:FlightInfo=this.registerForm.value;
    this.service.editFlight(flightToEdit).subscribe();
  }
}
