import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'SPRINGBOOT-EMPLOYEES1-INTEGRATION';
 // employeeList:any;
//allEmployees:Employee[]=[];
allProducts:Employee[]=[];

currentEmployeeId:string;
editMode:boolean=false;

@ViewChild('myForm') form:NgForm ;
  constructor(private employeeService:EmployeeService){}
 
  ngOnInit(): void {
    this.getAllEmployees();
   } 

  
   saveEmployee(employees:{firstName:string,lastName:string,email:string})
   {
    
     if(!this.editMode){
     alert(this.editMode +" save from SaveEmployee app component");
      this.employeeService.saveEmployee(employees);}
     else{
      alert("updated from save and current Employee id is "+this.currentEmployeeId);
       this.employeeService.updateEmployee(this.currentEmployeeId,employees);
     }
   
   }
  getAllEmployees() {
    alert("from app component");
    this.employeeService.getAllProducts().subscribe((employees)=>{
      
                  this.allProducts=employees;
        console.log(this.allProducts);
    });
    
  
  }
  
  deleteEmployee(id:string)
  {
    alert("from app component");
this.employeeService.deleteEmployee(id).subscribe((data)=>{
  console.log("Data Deleted");
})
  }

  onupdateEmployee(id:string)
  {
    //Get the current employee id 
    alert("update called from appcomponent");
    let currentProduct= this.allProducts.find((p)=>{return p.id===id});
 alert("current proudt is"+currentProduct);

  //populate the form with in the product details
  this.form.setValue(
    {
      firstName: currentProduct.firstName,
      lastName: currentProduct.lastName,
      email:currentProduct.email,
     
        

    }
  );
  // change the button value to update product
  this.editMode=true;
}
ngOnDestroy(): void {
  
}
}
