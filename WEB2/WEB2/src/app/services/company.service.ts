import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AvioCompany } from '../_models/avioCompany';

@Injectable({
    providedIn: 'root'
})

export class CompanyService{
    base_url = "http://localhost:44395/api/avio";

    constructor(private http: HttpClient) { }

    getCompany(): Observable<AvioCompany[]> {
        
        return this.http.get<AvioCompany[]>(this.base_url + "/Avio");
        
    }

    getCompanyById(id: string): Observable<AvioCompany> {
        
        return this.http.get<AvioCompany>(this.base_url + "/Avio/" + id);
        
    }

    addCompany(model:any){
        return this.http.post(this.base_url+"/AddCompany",model);
    }

    editCompany(company:AvioCompany){
        return this.http.post(this.base_url+"/EditCompany/"+company.id,company);
    }

    deleteCompany(id: string){
        return this.http.delete(this.base_url+"/DeleteCompany/"+id);
    }

}