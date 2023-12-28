import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string=''
  userPassword:string=''
 
  flag1:boolean=false;
  @Output() valueFromLogin=new EventEmitter();

  blockLogin:boolean=true;
  constructor() { }

user=[
  {
    u_Name: 'amod',
    pwd:'Amod123'
  },
  {
    u_Name:'pramod',
    pwd:'peamod123'
  }
]

  ngOnInit(): void {


  }
  
check()
{
  

  for (const iter of this.user) {
    if(iter.u_Name===this.userName && iter.pwd===this.userPassword)
    {
     
       this.flag1=true

       this.valueFromLogin.emit(this.flag1)
    break;
    }

   
   
  }
  if(!this.flag1)
  {
    alert("You are nno user")
  }
 
if(this.userName.length===0 || this.userPassword.length===0)
{
  console.warn("please fill your details");
  
}
}
showSignUp()
{
this.blockLogin=true;
}

}


