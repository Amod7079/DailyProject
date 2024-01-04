import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordServiceService } from '../password-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    userName:string=''
    password: string='';
    Repassword :string=''
    flag : boolean = false;
  
  constructor(private router:Router , private passwordServiceService:PasswordServiceService ) { }

  ngOnInit(): void {
  }

//   showSignUp()
//   {
// this.blockLogin=true;
//   }
japLoginPe()
{
  for(let item of this.passwordServiceService.user){
    if(item.u_Name === this.userName){
      this.flag = true;
    }
  }

  if(!this.flag){
    if(this.password === this.Repassword){
      this.passwordServiceService.newUserNameFromSignup = this.userName;
      this.passwordServiceService.newUserPasswordFromSignup = this.password;
      this.router.navigate(['/company'])
    }
    else{
      alert("password mismatch")
    }
  }
  else{
    alert("you have account already")
  }

  this.router.navigate(['/login'])
}

}
