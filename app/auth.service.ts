import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployerrModel } from './employerr.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiurl = "http://localhost:8071/employerr"; 

  constructor(private http:HttpClient) { }
  createemployerr(employerr:EmployerrModel):Observable<any>{
    console.log("this is url",this.apiurl);
      return this.http.post<any>(`${this.apiurl}/register`,employerr,{responseType:'json'});
  }

  login(employerr:EmployerrModel):Observable<any>{
    console.log("this is url",this.apiurl);
      return this.http.post<any>(`${this.apiurl}/register`,employerr,{responseType:'json'});
  }

  

}
