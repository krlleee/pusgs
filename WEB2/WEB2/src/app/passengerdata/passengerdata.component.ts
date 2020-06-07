import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../_models/applicationUser.model';
import { Validators, FormBuilder } from '@angular/forms';
import { ProfileService } from '../services/user.service';

@Component({
  selector: 'app-passengerdata',
  templateUrl: './passengerdata.component.html',
  styleUrls: ['./passengerdata.component.scss']
})
export class PassengerdataComponent implements OnInit {

  profile: ApplicationUser = new ApplicationUser();
  registerForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    type: ['', Validators.required]
  });
  constructor(private service: ProfileService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.service.getUser().subscribe((result) =>{
      
      this.profile = result;
      this.registerForm.patchValue({
        id: this.profile.id,
        name: this.profile.name,
        lastname: this.profile.lastName,
        phoneNumber: this.profile.phoneNumber,
        password: this.profile.password,
        address: this.profile.address,
        email: this.profile.email,
        username: this.profile.username,
        type: this.profile.type
      });

    });
  }

}
