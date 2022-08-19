import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {

  list: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',	
    'Assam',	
    'Bihar',	
    'Chhattisgarh',
    'Goa',	
    'Gujarat',	
    'Haryana',	
    'Himachal', 
    'Jammu and Kashmir',
    'Jharkhand',	
    'Karnataka',	
    'Kerala',	
    'Madhya Pradesh',
    'Maharashtra',	
    'Manipur',	
    'Meghalaya',	
    'Mizoram',	
    'Odisha',
    'Punjab',	
    'Rajasthan',	
    'Sikkim',	
    'Tamil Nadu',
    'Telangana',	
    'Tripura',	
    'Bengali',
    'uttar Pradesh',	
    'Uttarakhand',
    'West Bengal',
]; 

  addProfileForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    age: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    address: ['', [Validators.required]],
    phnno: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],
    occupation: ['', [Validators.required]],
    email: ['', [Validators.required]],
    state: ['', [Validators.required]],



  })

  constructor(private fb: FormBuilder, private router: Router, private ds: DataService) { }

  ngOnInit(): void {
  }

  register() {

    var name = this.addProfileForm.value.name
    var age = this.addProfileForm.value.age
    var address = this.addProfileForm.value.address
    var phnno = this.addProfileForm.value.phnno
    var occupation = this.addProfileForm.value.occupation
    var email = this.addProfileForm.value.email
    var state=this.addProfileForm.value.state

    if (this.addProfileForm.valid) {

      const result = this.ds.submit(name, age, address, phnno, occupation, email, state,);

      if(result){
        alert("login successful")
        this.ds.database.push(this.addProfileForm.value)
        this.ds.saveDetails();
      }
      else{
        alert("invalid form")
      }

    }
  }

}
