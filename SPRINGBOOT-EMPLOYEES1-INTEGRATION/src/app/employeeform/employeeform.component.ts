import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  
  editMode:boolean=false;
  currentEmployeeId!: string;
 
  ngOnInit(): void {
   
  }
  
  constructor(private employeeService:EmployeeService){}
saveEmployee(Employee:{firstName:string,lastName:string,email:string})
{
  if(!this.editMode)
   this.employeeService.saveEmployee(Employee);
  else{
    this.employeeService.updateEmployee(this.currentEmployeeId,Employee);
  }

}
}
