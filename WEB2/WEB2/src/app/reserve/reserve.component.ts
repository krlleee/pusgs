import { Component, OnInit } from '@angular/core';
import {FlightData} from '../_models/flightData';
import{Router,ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { FlightService } from '../services/flight.service';
import { FlightInfo } from '../_models/flightInfo';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  flight: FlightInfo = new FlightInfo();
 
  
  
  constructor(private route: ActivatedRoute,private sanitizer: DomSanitizer,private service:FlightService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      this.service.getFlightbyId(res.id).subscribe((res)=>{
        console.log(res);
        this.flight=res;
       console.log(this.flight);

         
        })
      });
    }

    

  }
  


