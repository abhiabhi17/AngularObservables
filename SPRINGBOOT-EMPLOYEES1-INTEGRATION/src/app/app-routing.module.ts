import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';

const routes: Routes = [

  // {path:'',component:EmployeeListComponent},
  // {path:'add',component:EmployeeformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
