import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CompanyComponent } from './company/company.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule,Routes } from '@angular/router';
import { PermissionDirectiveDirective } from './PermissionDirective/permission-directive.directive';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyIdNameAddress } from './Company.services';
const routes:Routes=[
  
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path:'signUp',
    component:SignupComponent
  },
  {
    path:'company',
    component:CompanyComponent
  },

  {
    path:'companyEdit',
    component:CompanyEditComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompanyComponent,
    SignupComponent,
    PermissionDirectiveDirective,
    CompanyEditComponent,
  
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [  CompanyIdNameAddress],
  bootstrap: [AppComponent]
})
export class AppModule { }
