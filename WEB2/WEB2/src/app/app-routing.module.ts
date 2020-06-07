import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import { RentflightComponent } from './rentflight/rentflight.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { FilteredComponent } from './filtered/filtered.component';
import { CompaniesComponent } from './companies/companies.component';
import { Company1Component } from './company1/company1.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ReghomeComponent } from './reghome/reghome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { InvitefriendsComponent } from './invitefriends/invitefriends.component';
import { PassengerdataComponent } from './passengerdata/passengerdata.component';
import { Company2Component } from './company2/company2.component';
import { CarcompaniesComponent } from './carcompanies/carcompanies.component';
import { MyreservationsComponent } from './myreservations/myreservations.component'
import {RentacarComponent} from './rentacar/rentacar.component';
import { AddflightComponent } from './addflight/addflight.component';
import { AddcompanieComponent } from './addcompanie/addcompanie.component';
import { EditflightComponent } from './editflight/editflight.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  }, 
  {
    path:'editflight/:id',
    component: EditflightComponent
  },
  {
    path:'addflight',
    component: AddflightComponent
  },
   {
    path:'addcompanie',
    component: AddcompanieComponent
  },
  {
    path:'rentflight',
    component: RentflightComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'friends',
    component: FriendsComponent
  },
  {
    path:'filtered',
    component: FilteredComponent
  },
  {
    path:'companies',
    component: CompaniesComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'company/:id',
    component: Company1Component
  },
  {
    path:'reserve/:id',
    component: ReserveComponent 
  },
  {
    path:'reghome',
    component: ReghomeComponent
  },
  {
    path:'signup',
    component: SignUpComponent
  },
  {
    path:'invitefriends',
    component: InvitefriendsComponent
  },
  {
    path:'passengerdata',
    component: PassengerdataComponent
  },
  {
    path:'company2/:id',
    component: Company2Component
  },
  {
    path:'carcompanies',
    component: CarcompaniesComponent
  },
  {
    path:'myreservations',
    component: MyreservationsComponent
  },
  {
  path:'rentacar',
  component: RentacarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
