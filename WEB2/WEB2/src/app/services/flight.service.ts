import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightInfo } from '../_models/flightInfo';



@Injectable({
    providedIn: 'root'
  })
  export class FlightService {
    base_url = "http://localhost:44395/api/flight";
    
    constructor(private http: HttpClient) { }

    getFlight(flight:FlightInfo): Observable<FlightInfo[]> {
        return this.http.post<FlightInfo[]>(this.base_url + "/SearchFlight", flight);
    }

    addFlight(model:any){
      return this.http.post(this.base_url+"/AddFlight",model);
    }

    getAllFlights():Observable<FlightInfo[]>{
      return this.http.get<FlightInfo[]>(this.base_url+"/Flights");
    }


    deleteFlight(id: string){
      return this.http.delete(this.base_url+"/DeleteFlight/"+id);
    }

    getFlightbyId(id:string):Observable<FlightInfo>
    {
      return this.http.get<FlightInfo>(this.base_url+"/GetFlight/"+id);
    }
   
    editFlight(flight:FlightInfo){
      return this.http.post(this.base_url+"/EditFlight/"+flight.id,flight);
  }

   
}