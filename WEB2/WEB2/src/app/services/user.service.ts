import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationUser } from '../_models/applicationUser.model';


@Injectable({
    providedIn: 'root'
  })
  export class ProfileService {
    base_url = "http://localhost:44395/api/profile";
  
    constructor(private http: HttpClient) { }

    getUser(): Observable<any> {
        
        return this.http.get<any>(this.base_url + "/GetUser/1");
    }

    editProfile(profile:ApplicationUser){
      
        return this.http.post(this.base_url + "/EditProfile/" + profile.id, profile);
    }

    searchFriends(friend:ApplicationUser): Observable<ApplicationUser[]> {
        return this.http.post<ApplicationUser[]>(this.base_url + "/SearchFriend", friend);
    }
}