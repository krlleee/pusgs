import { Component, OnInit, Input } from '@angular/core';
import { CarCompany } from 'src/app/_models/carCompany';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-cards',
  templateUrl: './company-cards.component.html',
  styleUrls: ['./company-cards.component.scss']
})
export class CompanyCardsComponent implements OnInit {
  @Input() carCompany: CarCompany;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onProfileView(){ 
    console.log(this.carCompany.id);
    this.router.navigate(['company2/' + this.carCompany.id]);
  }

}
