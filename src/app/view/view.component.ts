import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public viewData : any = [];
  data :any = []
  id: any;

  constructor(private serve:DataService,private route : ActivatedRoute, private router:Router) {
    this.id = this.route.snapshot.params
    console.log(this.id.id);
    
   }

  ngOnInit(): void {
    this.viewData = this.serve.getDatabyId(this.id.id)
    console.log(this.viewData);
    this.data.push(this.serve.viewData)
    console.log(this.data);
    
    
  }

}
