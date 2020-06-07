import { Component, OnInit } from '@angular/core';
import { CarCompany } from '../_models/carCompany';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-company2',
  templateUrl: './company2.component.html',
  styleUrls: ['./company2.component.scss']
})
export class Company2Component implements OnInit {
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
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => { 
      if(res.id == '1')
      {
        this.carCompany.id = 1;
        this.carCompany.name = 'National';
        this.carCompany.promoDesc= 'A faster, more convenient experience every time you rent a vehicle.';
        this.carCompany.photo='/assets/img/National.png';
        this.carCompany.photoh='/assets/img/Nat.png';
        this.carCompany.about='National Car Rental, a sister company of Alamo and Enterprise, excels when it comes to customer service, taking the No. 2 spot in J.D. Powers’ annual report—and taking a five-star score for both overall satisfaction and its reservation process among customers. It has a huge variety of vehicles to rent, from little compact cars to Chevy cargo vans. National’s offerings and programs are aimed especially at business travelers, with companies taking advantage of the company’s business rental program, which lets employees at any sized company get cars at contracted rates versus having to pay a premium for rental needs that pop up at the last minute during busy travel times. Renters can also put their air miles toward renting cars with points from a number of common programs—Delta SkyMiles, American Airlines AAdvantage, and Southwest Rapid Rewards—as well as points from hotel programs like Hilton Honors. Overall, it’s a solid bet if you want an easy way to book cars at a fairly standard rate.';
        this.carCompany.address='217 Eldon Wilson Rd, Gypsum CO 81637 US'
        this.carCompany.carB='Opel'
        this.carCompany.carB1='BMW'
        this.carCompany.carB2='AUDI'
        this.carCompany.carB3='Toyota'
        this.carCompany.carM="Insignia"
        this.carCompany.carM1="320i"
        this.carCompany.carM2="A4"
        this.carCompany.carM3="Auris"
        this.carCompany.carP="20$"
        this.carCompany.carP1="40$"
        this.carCompany.carP2="30$"
        this.carCompany.carP3="10$"
        this.carCompany.map='https://maps.google.com/maps?q=217 Eldon Wilson Rd, Gypsum, CO 81637, Сједињене Државе&t=&z=13&ie=UTF8&iwloc=&output=embed';
      }
      if(res.id == '2')
      {
        this.carCompany.id = 2;
        this.carCompany.name = 'Hertz';
        this.carCompany.promoDesc= 'Although it’s one of the largest car rental companies there—it has more than 1,600 airport locations in the U.S. alone.';
        this.carCompany.photo='/assets/img/Hertz.jpg';
        this.carCompany.photoh='/assets/img/Hertzz.png';
        this.carCompany.about='Although it’s one of the largest car rental companies there—it has more than 1,600 airport locations in the U.S. alone—it’s definitely not the cheapest, with an average daily rate of $48.50, putting it on par with Enterprise. We love the range of cars that the company offers: While there’s definitely your business-trip standards, as well as high-capacity cars for families and compact economy cars for those on a budget, there’s also a rental section of hybrid cars, luxury “dream cars” that are treats for memorable trips, and a special-edition Mustang Hertz collaborated with Ford to create. The company also offers a great “NeverLost” GPS program, and it doesn’t come with just a device: You’ll also get access to an online trip planner, which you can then download your route to your GPS via a flash drive, a concierge service for planning assistance, and clever features like downloadable national park and city guides.';
        this.carCompany.address='George Airport, George, 6530';        
        this.carCompany.carB='Opel'
        this.carCompany.carB1='BMW'
        this.carCompany.carB2='VW'
        this.carCompany.carB3='Volvo'
        this.carCompany.carM="Insignia"
        this.carCompany.carM1="320i"
        this.carCompany.carM2="Passath B7"
        this.carCompany.carM3="s40";
        this.carCompany.carP="25$"
        this.carCompany.carP1="40$"
        this.carCompany.carP2="35$"
        this.carCompany.carP3="20$"
        this.carCompany.map='https://maps.google.com/maps?q=George Airport, George, 6530&t=&z=13&ie=UTF8&iwloc=&output=embed';
      }
      if(res.id == '3')
      {
        this.carCompany.id = 3;
        this.carCompany.name = 'Premier Rent A Car Belgrade';
        this.carCompany.promoDesc= 'Premier Rent A Car Belgrade, provide car rental service in Serbia.';
        this.carCompany.photo='/assets/img/Premier.jpg';
        this.carCompany.photoh='/assets/img/Premierrr.png';
        this.carCompany.about='Premier Rent A Car Belgrade, provide car rental service in Serbia. Car rental with no hidden charges with 24/7 pick-up and drop-off service. Free delivery and collection upon your request in Belgrade. Best Price Guarantee on any car hire at Belgrade, Airport Nikola Tesla.';
        this.carCompany.address='Airport Nikola Tesla 11180 Belgrade, Serbia';
        this.carCompany.carB='Opel'
        this.carCompany.carB1='BMW'
        this.carCompany.carB2='Honda'
        this.carCompany.carB3='Peugeot'
        this.carCompany.carM="Insignia"
        this.carCompany.carM1="320i"
        this.carCompany.carM2="Civic"
        this.carCompany.carM3="307"
        this.carCompany.carP="18$"
        this.carCompany.carP1="30$"
        this.carCompany.carP2="25$"
        this.carCompany.carP3="15$"
        this.carCompany.map='https://maps.google.com/maps?q=Airport Nikola Tesla 11180 Belgrade, Serbia&t=&z=13&ie=UTF8&iwloc=&output=embed';
      }
      if(res.id == '4')
      {
        this.carCompany.id = 4;
        this.carCompany.name = 'Budget';
        this.carCompany.promoDesc= 'Budget, true to its name, has some of the cheapest car rentals in the industry, with an average rental cost of about $35/day.';
        this.carCompany.photo='/assets/img/Budget.png';
        this.carCompany.photoh='/assets/img/budgettt.png';
        this.carCompany.about='Budget, true to its name, has some of the cheapest car rentals in the industry, with an average rental cost of about $35/day—and an extra discount—up to a whopping 35 percent—if you pay when you make the reservation. They also do Mustang weekend program where you can get a free third day—although it’s for intermediate (group C) through four-door full-size cars (group E) only, it’s still an offer that’s attractive for families hitting the road for a quick weekend trip. If you want something that’s not your usual rental car, Budget’s got that too—it’s not just Honda Accords here: You can rent hybrids like the Toyota Prius or convertibles like a Chevy Camaro here, too. Just be advised that customer satisfaction is a little lacking, starting with the reservation process and ending with the drop-off, so if customer service is something that will make or break an experience for you, it might be worth paying a bit more elsewhere.';
        this.carCompany.address='Modesto City-County Airport, Modesto, California, United States-(MOD)';
        this.carCompany.carB='Kia'
        this.carCompany.carB1='Renault'
        this.carCompany.carB2='Peugeot'
        this.carCompany.carB3='Toyota'
        this.carCompany.carM="Ceed"
        this.carCompany.carM1="Clio"
        this.carCompany.carM2="208"
        this.carCompany.carM3="Yaris"
        this.carCompany.carP="12$"
        this.carCompany.carP1="14$"
        this.carCompany.carP2="10$"
        this.carCompany.carP3="11$"
        this.carCompany.map='https://maps.google.com/maps?q=Modesto City-County Airport, Modesto, California, United States-(MOD)&t=&z=13&ie=UTF8&iwloc=&output=embed';
      }

      document.getElementById('myDiv').style.backgroundImage = 'url(' + this.carCompany.photoh + ')';
      
    });
  }

  mapURL(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.carCompany.map);
  }

}
