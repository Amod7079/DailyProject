import { Component, OnInit } from '@angular/core';
import { CompanyIdNameAddress } from '../Company.services';
import { CompanyDetails } from '../CompanyDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  
})
export class CompanyComponent implements OnInit {
id: any;
name:any;
address:any;
objfromOfCompany:CompanyDetails[]
  constructor(private companyIdNameAddress:CompanyIdNameAddress, private router:Router) {

    this.objfromOfCompany=  companyIdNameAddress.company



   }

  ngOnInit(): void {
    
  }
  goToCompanyEditSectio(value:any)
  {
   this.companyIdNameAddress.objToEdit=value;
   console.log(value);
   
   
   const queryParams1 = {
    //id: value.id,
    name: value.name,
    address: value.address,
  };


    this.router.navigate(['companyEdit'],  { queryParams: queryParams1 });  
  }
  
  
}
