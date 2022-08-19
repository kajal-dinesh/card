import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data:any=[];

  constructor(private serv:DataService,private router:Router) { }

  ngOnInit(): void {
    this.data=this.serv.getData()
    console.log(this.data)
  }

  view(id:any){
    console.log(id);
    this.router.navigate(['view',id]);
  }

}
