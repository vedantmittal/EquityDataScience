import { Component, OnInit } from '@angular/core';
import { Api_Elements } from 'src/api_elements';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  viewProviders: [ApiService]
})
export class EmployeesComponent implements OnInit {

  data:any =[];
  tokens:any;
  constructor(private user:ApiService, private router: Router) { 
    let token = localStorage.getItem("token");
    this.user.getdata().subscribe(data=>{
      // console.warn(data)
      this.data = data;
      console.warn(this.data)
      this.tokens = token;
      console.warn(token)
    })
  }

  ngOnInit(): void {
  }

  getemployee(id:any):void{
     let rp = 'employees/'+id;
    this.router.navigate([`${rp}`]);
  }

}


