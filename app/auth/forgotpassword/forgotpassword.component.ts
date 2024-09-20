import { Component } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
    
  forgotpassworddata:any={
    newpassword:'',
    confirmpassword:''
  }
  forgotpassword(){
    console.log('Forgot password');
  }
}
