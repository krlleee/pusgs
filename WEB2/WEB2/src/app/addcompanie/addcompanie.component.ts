import { Component, OnInit } from '@angular/core';
import { AvioCompany } from '../_models/avioCompany';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcompanie',
  templateUrl: './addcompanie.component.html',
  styleUrls: ['./addcompanie.component.scss']
})
export class AddcompanieComponent implements OnInit {

  model: any={};

  constructor(private service:CompanyService,private router:Router) { }

  ngOnInit(): void {
  }

  add(){
    this.service.addCompany(this.model).subscribe((result)=>{console.log("POVEZAO");})
   
  }

}
