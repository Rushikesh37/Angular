import { Component, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutUsDetailsComponent } from './about-us-details/about-us-details.component'
import { AdministrationDetailsComponent } from './administration-details/administration-details.component'
import { CeoComponent } from './ceo/ceo.component'
import { ContactDetailsComponent } from './contact-details/contact-details.component'
import { CountryMngComponent } from './country-mng/country-mng.component'
import { CreateEmployeeComponent } from '../../src/app/create-employee/create-employee.component'
import { DepartmentDetailsComponent } from './department-details/department-details.component'

import { DepartmentListComponent } from './department-list/department-list.component'
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { EmplyoeeListComponent } from './emplyoee-list/emplyoee-list.component'
import { FinanceDetailsComponent } from './finance-details/finance-details.component'
import { FounderComponent } from './founder/founder.component'
import { HeadOfSoftEnggComponent } from './head-of-soft-engg/head-of-soft-engg.component'
import { HumanResourcesDetailsComponent } from './human-resources-details/human-resources-details.component'
import { InformationTechnologyDetailsComponent } from './information-technology-details/information-technology-details.component'
import { MarketingDetailsComponent } from './marketing-details/marketing-details.component'
import { PageNotfoundComponent } from './page-notfound/page-notfound.component'
import { SoftwareEngineeringComponent } from './software-engineering/software-engineering.component'
import { TeamLeadComponent } from './team-lead/team-lead.component'


const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'contactus', component: ContactDetailsComponent }, // {path:'',component:DepartmentListComponent},
  {
    path: 'departments',
    component: DepartmentListComponent,
    children: [{
      path: 'departmentdetail',
      component: DepartmentDetailsComponent,
      children: [{ path: 'marketing', component: MarketingDetailsComponent }, { path: 'finance', component: FinanceDetailsComponent }, { path: 'hr', component: HumanResourcesDetailsComponent }, { path: 'it', component: InformationTechnologyDetailsComponent }, { path: 'administration', component: AdministrationDetailsComponent }]
    }]
  },
  {
    path: 'aboutus',
    component: AboutUsDetailsComponent,
    children: [{
      path: 'founder',
      component: FounderComponent,
      children: [{
        path: 'ceo',
        component: CeoComponent,
        children: [{
          path: 'countrymng',
          component: CountryMngComponent,
          children: [{
            path: 'HeadSoft',
            component: HeadOfSoftEnggComponent,
            children: [{
              path: 'teamlead',
              component: TeamLeadComponent,
              children: [{ path: 'se-1', component: SoftwareEngineeringComponent }]
            }]
          }]
        }]
      }]
    }]
  },

  {
    path: 'employees',
    component: EmplyoeeListComponent,
    children: [{
      path: 'employeedetails',
      component: EmployeeDetailsComponent},{ path: 'createemployee', component: CreateEmployeeComponent }]
  },
  {path:'**',component:PageNotfoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [DepartmentListComponent, EmplyoeeListComponent, PageNotfoundComponent, DepartmentDetailsComponent]
