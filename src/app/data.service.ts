import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  public viewData:any = []

  constructor() { }
  public database:any = [
    { id: 1, name: "M. T. Vasudevan Nair", age: 89, address: "Kudallur,", phnno: 6235478952, occupation: "writer ", email: "mt@gmail.com", img: "../../assets/v.jpg" },
    { id: 2, name: " Kamala Surayya", age: 75, address: " Punnayurkulam", phnno: 6235478952, occupation: "writer", email: "Kamala@gmail.com", img: "../../assets/k.jpg" },
    { id: 3, name: "Sugathakumari ", age: 86, address: "Aranmula ", phnno: 6235478952, occupation: "writer", email: "kumari@gmail.com", img: "../../assets/s.jpg" },
    { id: 4, name: "Sarah Joseph", age: 76, address: "Kuriachira ", phnno: 6235478952, occupation: "writer", email: "sarah@gmail.com", img: "../../assets/sa.jpg" },

  ]
  getData() {
    return <any>(this.database)
  }

  getDatabyId(id:any){
    this.database.forEach((item:any)=>{
      if(item.id == id){
        console.log("item:",item);

        this.viewData = item;
        return this.viewData;
        
      }
    })
  }

  saveDetails() {
    if (this.database) {
      localStorage.setItem("database", JSON.stringify(this.database));
    }
  }

  submit(name:any,age:any,address:any,phnno:any,occupation:any,email:any,state:any){

    let db = this.database;

    db = {
      name,
      age,
      address,
      phnno,
      occupation,
      email,
      state
    }

    console.log(db);
    this.saveDetails();
    return true
    
  }

}
