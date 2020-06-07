import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { FlightInfo } from '../_models/flightInfo';
import { AvioCompany } from '../_models/avioCompany';

@Injectable()  

export class DataService { 
    private selectedData = new BehaviorSubject(null);
    currentData = this.selectedData.asObservable();

    constructor() {}

    changeData(flightInfo: FlightInfo[]) { 
        this.selectedData.next(flightInfo);
    }

    

}
