import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordServiceService {

newUserNameFromSignup : string =""
newUserPasswordFromSignup : string =""


  user=[
    {
    u_Name: 'amod',
      pwd:'Amod123'
    },
    {
      u_Name:'pramod',
      pwd:'pramod123'
    }
  ]
  constructor() { }
}
