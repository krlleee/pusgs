import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import { RentflightComponent } from './rentflight/rentflight.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { FilteredComponent } from './filtered/filtered.component';
import { CompaniesComponent } from './companies/companies.component';
import { Company1Component } from './company1/company1.component';
import { ReghomeComponent } from './reghome/reghome.component';
import { InvitefriendsComponent } from './invitefriends/invitefriends.component';
import { PassengerdataComponent } from './passengerdata/passengerdata.component';
import { CompanyCardComponent } from './companies/company-card/company-card.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Company2Component } from './company2/company2.component';
import { CarcompaniesComponent } from './carcompanies/carcompanies.component';
import { CompanyCardsComponent } from './carcompanies/company-cards/company-cards.component';
import { ReserveComponent } from './reserve/reserve.component';
import {FilteredcardsComponent} from './filtered/filteredcards/filteredcards.component';
import { MyreservationsComponent } from './myreservations/myreservations.component';
import {RentacarComponent} from './rentacar/rentacar.component';
import { ProfileService } from './services/user.service';
import { HttpService } from './services/httpService.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlightService } from './services/flight.service';
import { DataService } from './services/data.service';
import { AddflightComponent } from './addflight/addflight.component';
import { AddcompanieComponent } from './addcompanie/addcompanie.component';
import { CompanyService } from './services/company.service';
import { EnablingformDirective } from './enablingform.directive';
import { EditflightComponent } from './editflight/editflight.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RentflightComponent,
    ProfileComponent,
    FriendsComponent,
    FilteredComponent,
    CompaniesComponent,
    PassengerdataComponent,
    Company1Component,
    InvitefriendsComponent,
    ReghomeComponent,
    CompanyCardComponent,
    SignUpComponent,
    Company2Component,
    CarcompaniesComponent,
    CompanyCardsComponent,
    ReserveComponent,
    FilteredcardsComponent,
    MyreservationsComponent,
    RentacarComponent,
    AddflightComponent,
    AddcompanieComponent,
    EnablingformDirective,
    EditflightComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [
    HttpService,
    ProfileService,
    FlightService,
    DataService,
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
