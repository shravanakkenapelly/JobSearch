import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { EmployerrModel } from 'src/app/employerr.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authservice:AuthService){}
  employerrdata:any={
    organizationname:'',
    address:'',
    contactno:'',
    email:'',
    username:'',
    password:''
  }
  createemployerr:any
  onSubmit(){
      this.authservice.createemployerr(this.employerrdata).subscribe(
        (response)=>{
          console.log("Successfully Registered",response);
        },
        (error)=>{
          console.log(error);
          if (error.error && error.error.text) {
            console.log('Response Text:', error.error.text);
            // Handle the response text as needed, e.g., display it to the user
            alert(error.error.text); // Example: Show an alert with the response text
          }
        }
      )
  }
 


}
