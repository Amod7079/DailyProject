import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyIdNameAddress } from '../Company.services';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  updateEmpName: any;
  updateEmpAddress: any;
  getName: any;

  constructor(private router: Router, private companyIdNameAddress: CompanyIdNameAddress, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params) => {
      this.getName = params['name']



    })
  }
  
  onsubmit() {
    this.companyIdNameAddress.company.find((x) => {
      if (x.name === this.getName) {
        x.name = this.updateEmpName
        x.address = this.updateEmpAddress
      }
    })
    this.router.navigate(['/company'])

  }
  



}
