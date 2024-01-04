import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordServiceService } from '../password-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = ''
  userPassword: string = ''

  flag1: boolean = false;
  @Output() valueFromLogin = new EventEmitter();

  blockLogin: boolean = true;
  constructor(private router: Router, private passwordServiceService: PasswordServiceService) { }

  // user=[
  //   {
  //     u_Name: 'amod',
  //     pwd:'Amod123'
  //   },
  //   {
  //     u_Name:'pramod',
  //     pwd:'pramod123'
  //   }
  // ]

  ngOnInit(): void {

  }

  check() {
    for (const iter of this.passwordServiceService.user) {
      if (iter.u_Name === this.userName && iter.pwd === this.userPassword) {

        this.flag1 = true
        this.router.navigate(['/company'])

        break;
      }
    }

    if (this.flag1 === false) {
      if (this.passwordServiceService.newUserNameFromSignup === this.userName && this.passwordServiceService.newUserPasswordFromSignup === this.userPassword) {
        this.router.navigate(['/company'])
      }
      else {
        alert("You are not an user")
      }
    }

    if (this.userName.length === 0 || this.userPassword.length === 0) {
      console.warn("please fill your details");
    }
  }

  showSignUp() {
    this.router.navigate(['/signUp'])
  }
}


