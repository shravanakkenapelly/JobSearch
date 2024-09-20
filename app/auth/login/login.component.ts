import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private router:Router){}
    logindata:any={
      username:'',
      password:''
    }
    SignIn(){
      console.log('SuccessfullyLogin');
    }
    NavigatetoHome(){
       this.router.navigate(['/'])
    }
}
