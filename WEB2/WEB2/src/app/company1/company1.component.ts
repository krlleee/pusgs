import { Component, OnInit } from '@angular/core';
import { AvioCompany } from '../_models/avioCompany';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { CompanyService } from '../services/company.service';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { EnablingformDirective } from '../enablingform.directive';

@Component({
  selector: 'app-company1',
  templateUrl: './company1.component.html',
  styleUrls: ['./company1.component.scss']
})



export class Company1Component implements OnInit {
 
  avioCompany: AvioCompany=new AvioCompany();
  
  registerForm=this.fb.group({
    id: ['', Validators.required],
    promoDesc:[{value:'',disabled:true} ,Validators.required],
    name: [{value:'',disabled:true} ,Validators.required],
    photo: [{value:'',disabled:true} ,Validators.required],
    photoh: [{value:'',disabled:true} ,Validators.required],
    map: [{value:'',disabled:true} ,Validators.required],
    address: [{value:'',disabled:true} ,Validators.required],
    about: [{value:'',disabled:true} ,Validators.required],
  });



  constructor(private sanitizer: DomSanitizer,private companyService: CompanyService,
              private route: ActivatedRoute,private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => { 
      this.companyService.getCompanyById(res.id).subscribe((res) => {
        this.avioCompany=res;
        this.registerForm.patchValue({
          id:this.avioCompany.id,
          promoDesc:this.avioCompany.promoDesc,
          name:this.avioCompany.name,
          photo:this.avioCompany.photo,
          photoh:this.avioCompany.photoh,
          map:this.avioCompany.map,
          address:this.avioCompany.address,
          about:this.avioCompany.about

        })
      }); 
      
    });

    
  }

   mapURL(){
     return this.sanitizer.bypassSecurityTrustResourceUrl(this.avioCompany.map);
  }

  disableForm()
  {
    this.registerForm.enable();
  }

  onSubmit(){
    let companyToEdit:AvioCompany=this.registerForm.value;
    this.companyService.editCompany(companyToEdit).subscribe();
  }

  deleteCompany(){
    this.companyService.deleteCompany(this.avioCompany.id).subscribe();
    this.router.navigate(["/companies"]);
      // window.location.reload();
    
  }

  

}
