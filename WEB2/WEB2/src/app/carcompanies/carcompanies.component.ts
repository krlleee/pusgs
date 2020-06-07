import { Component, OnInit } from '@angular/core';
import { CarCompany } from '../_models/carCompany';

@Component({
  selector: 'app-carcompanies',
  templateUrl: './carcompanies.component.html',
  styleUrls: ['./carcompanies.component.scss']
})
export class CarcompaniesComponent implements OnInit {
  carCompany: CarCompany= {
    id: 0, 
    name: '',
    photo: '',
    promoDesc: '',
    photoh: '',
    map: '',
    address: '',
    about: '',
    carB: '',
    carM: '',
    carP: '',
    carB1: '',
    carM1: '',
    carP1: '',
    carB2: '',
    carM2: '',
    carP2: '',
    carB3: '',
    carM3: '',
    carP3: ''
 
  };
  carCompany2: CarCompany = {
    id: 0, 
    name: '',
    photo: '',
    promoDesc: '',
    photoh: '',
    map: '',
    address: '',
    about: '',
    carB: '',
    carM: '',
    carP: '',
    carB1: '',
    carM1: '',
    carP1: '',
    carB2: '',
    carM2: '',
    carP2: '',
    carB3: '',
    carM3: '',
    carP3: ''
 
  };
  carCompany3: CarCompany = {
    id: 0, 
    name: '',
    photo: '',
    promoDesc: '',
    photoh: '',
    map: '',
    address: '',
    about: '' ,
    carB: '',
    carM: '',
    carP: '',
    carB1: '',
    carM1: '',
    carP1: '',
    carB2: '',
    carM2: '',
    carP2: '',
    carB3: '',
    carM3: '',
    carP3: ''
 
  };
  carCompany4: CarCompany = {
    id: 0, 
    name: '',
    photo: '',
    promoDesc: '',
    photoh: '',
    map: '',
    address: '',
    about: '',
    carB: '',
    carM: '',
    carP: '',
    carB1: '',
    carM1: '',
    carP1: '',
    carB2: '',
    carM2: '',
    carP2: '',
    carB3: '',
    carM3: '',
    carP3: ''
 
  };
  carCompanies: CarCompany[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() { 
    this.carCompany.id = 1;
    this.carCompany.name = 'National';
    this.carCompany.promoDesc= 'A faster, more convenient experience every time you rent a vehicle.';

    
    this.carCompany.photo='/assets/img/National.jpg';

    this.carCompany2.id = 2;
    this.carCompany2.name = 'Hertz';
    this.carCompany2.promoDesc= 'Although it’s one of the largest car rental companies there—it has more than 1,600 airport locations in the U.S. alone.';
    this.carCompany2.photo='/assets/img/Hertz.jpg';

    this.carCompany3.id = 3;
    this.carCompany3.name = 'Premier Rent A Car';
    this.carCompany3.promoDesc= 'Premier Rent A Car Belgrade, provide car rental service in Serbia.';
    this.carCompany3.photo='/assets/img/Premier.jpg';

    this.carCompany4.id = 4;
    this.carCompany4.name = 'Budget';
    this.carCompany4.promoDesc= 'Budget, true to its name, has some of the cheapest car rentals in the industry, with an average rental cost of about $35/day.';
    this.carCompany4.photo='/assets/img/Budget.png';

    this.carCompanies.push(this.carCompany, this.carCompany2, this.carCompany3, this.carCompany4);
  }

}