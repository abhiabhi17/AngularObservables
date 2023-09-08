import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Employee } from './employee';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    
  }

  public getAllProducts()
  {
    const header=new HttpHeaders()
        .set('content-type','application/json')
        .set('Access-Control-Allow-Origin','*')
       
        const params=new HttpParams().set('print','pretty').set('pagenum',1)
       
        return this.http.get<{[key:string]:Employee}>('http://localhost:8080/api/employees/getAll',{'headers':header,params:params})
     .pipe(map((res)=>{
      const employees=[];
      for(const key in res)
      {
        if(res.hasOwnProperty(key))
        {
          employees.push({...res[key]})
        }
      }
      return employees;
     }
     
     ))
   // return this.http.get('http://localhost:8080/api/employees/getAll');
  }


  saveEmployee(Employee: { firstName: string; lastName: string; email: string; })
  {
    return this.http.post('http://localhost:8080/api/employees/save',Employee,{responseType: 'text'}).subscribe((response)=>{console.log("EmployeeSaved") });
  }



  deleteEmployee(id:string)
  {
    alert("id for delte employe is "+id);
    return this.http.delete('http://localhost:8080/api/employees/delete/'+id,{responseType: 'text'});
  }


  updateEmployee(id:string,value:Employee)
  {
    alert("id for updated Employee "+id);
     this.http.put('http://localhost:8080/api/employees/'+id,value).subscribe();
  }
}
