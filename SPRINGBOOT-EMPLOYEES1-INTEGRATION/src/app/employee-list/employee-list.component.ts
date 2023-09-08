import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  
employeeList:any;
allEmployees:Employee[]=[];
editMode:boolean=false;
currentEmployeeId:string;

@ViewChild('myForm') form:NgForm ;
  constructor(private employeeService:EmployeeService){}
  ngOnInit(): void {
   
   } 

}
   
