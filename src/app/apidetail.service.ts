import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApidetailService {
  c:any;
  constructor(private http:HttpClient) {
    let a=window.location["href"];
    let b= a.split('/');
    this.c=b[b.length-1];
   }
  getdata(){
    let url = "http://dummy.restapiexample.com/api/v1/employee/"+this.c;
    return this.http.get(url);
  }
}
