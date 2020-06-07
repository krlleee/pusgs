import { Component, OnInit } from '@angular/core';
import { AvioCompany } from '../_models/avioCompany';
import { CompanyService } from '../services/company.service';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  
  
  avioCompanies: AvioCompany[] = [];

  constructor(private service:CompanyService) { }

  ngOnInit(): void {
    this.service.getCompany().subscribe(res=>{this.avioCompanies=res})
    
  }

  

}
