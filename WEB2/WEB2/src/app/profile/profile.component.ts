import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/user.service';
import { ApplicationUser } from '../_models/applicationUser.model';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders()
    .set('Content-Type', 'undefined')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    .set('Access-Control-Allow-Headers', 'Origin')
    .set('Access-Control-Allow-Credentials', 'true');
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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

  onSubmit(){
    let userToEdit : ApplicationUser = this.registerForm.value;
    
    this.service.editProfile(userToEdit).subscribe();
  }
}
