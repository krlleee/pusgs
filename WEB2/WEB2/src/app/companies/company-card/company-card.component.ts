import { Component, OnInit, Input } from '@angular/core';
import { AvioCompany } from 'src/app/_models/avioCompany';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {
  @Input() avioCompany: AvioCompany;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onProfileView(){ 
    console.log(this.avioCompany.id);
    this.router.navigate(['company/' + this.avioCompany.id]);
  }

}
