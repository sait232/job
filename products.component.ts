import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // get id
id:number;
get:any;
// get name
id1:string;
get1:any;
// get all
get2:any[]=[];
// min max
min:any;
max:any;
minmaxarray:any[]=[];
  constructor(private _service:DataService) { 

  }
 

getid(){
  this._service.getUserById(this.id).subscribe(
    (response:any)=>{

      this.get=response;
     console.log(response);
    },
    (error:any)=>console.log(error)
  )
}
getname(){
  this._service.getUserByName(this.id1).subscribe(
    (response:any)=>{
      this.get1=response;
      console.log(response);
    },
   (error:any)=>console.log(error)
  )
}
getbyall(){
  this._service.getAllUsers().subscribe(
    (response:any)=>{
      this.get2=response;
      console.log(response);
    },
  (error:any)=>  console.log(error)
  )
}
getRange(){
  this._service.getMinMax(this.min,this.max).subscribe(
    (response:any)=>{
      this.minmaxarray=response;
      console.log(response);
    },
(error:any)=>console.log(error)
  )
}

  ngOnInit(): void {
this.getbyall();

  }

}
