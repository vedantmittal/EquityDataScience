import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children : [
      {
      path: '',
      component: LoginComponent,
      }
    ]
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
