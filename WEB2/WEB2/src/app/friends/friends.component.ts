import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../_models/applicationUser.model';
import { Validators, FormBuilder } from '@angular/forms';
import { ProfileService } from '../services/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  friends: ApplicationUser[]=[];
  friend: ApplicationUser = new ApplicationUser();
  registerForm = this.fb.group({
    
    id: ['', Validators.required],
    name:['', Validators.required],
    lastName: ['', Validators.required],
    username:['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    address: ['', Validators.required],
    type: ['', Validators.required],
  });

  constructor(private fb:FormBuilder,private service:ProfileService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    let friendToFind : ApplicationUser = this.registerForm.value;
    
    this.service.searchFriends(friendToFind).subscribe(respons=>{this.friends=respons});
      
  }

}
