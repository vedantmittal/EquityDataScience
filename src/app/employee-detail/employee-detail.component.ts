import { Component, OnInit } from '@angular/core';
import { ApidetailService } from '../apidetail.service';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
  viewProviders: [ApidetailService]
})
export class EmployeeDetailComponent implements OnInit {
  // c:any;
  // constructor() { 
  //   let a=window.location["href"];
  //   let b= a.split('/');
  //   this.c=b[b.length-1];
  //   console.warn(this.c);
  // }
  ngOnInit(): void {  
  }
  data:any =[];
  erorrs:any;
  constructor(private user:ApidetailService) { 
    this.user.getdata().subscribe(data=>{
      this.data = data;
      console.warn(this.data);
    },error => {
      console.warn(error);
      this.erorrs = error
      alert('Please Reload again ' + error.statusText)
    },)
  }
  

}
