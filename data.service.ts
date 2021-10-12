import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
// baseUrl:any='http://localhost:3000/';
baseUrl1:any='https://localhost:44337/';
baseUrl2:any="https://localhost:44353/";
  constructor(private _http:HttpClient) { 

  }
  
  getUserById(Id1:number){
    return this._http.get(this.baseUrl1+`api/product/GetById/${Id1}`);
  }
  getUserByName(user:string){

    return this._http.get(this.baseUrl1+`api/getby/name/${user}`);
  }
 getAllUsers(){
   return this._http.get(this.baseUrl1+`api/product/getall`);
 }
 getMinMax(min:number,max:number){
   return this._http.get(this.baseUrl1+`api/minmax/max/${min}/${max}`);
 }

 //get admin all for searchbar
public getAllUsersSearchBar(){

  return this._http.get(this.baseUrl2+`api/get/alladmin`);
}
}
