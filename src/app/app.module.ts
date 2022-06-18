import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MarketingDetailsComponent } from './marketing-details/marketing-details.component';
import { FinanceDetailsComponent } from './finance-details/finance-details.component';
import { HumanResourcesDetailsComponent } from './human-resources-details/human-resources-details.component';
import { InformationTechnologyDetailsComponent } from './information-technology-details/information-technology-details.component';
import { AdministrationDetailsComponent } from './administration-details/administration-details.component';
import { AboutUsDetailsComponent } from './about-us-details/about-us-details.component';
import { FounderComponent } from './founder/founder.component';
import { CeoComponent } from './ceo/ceo.component';
import { CountryMngComponent } from './country-mng/country-mng.component';
import { HeadOfSoftEnggComponent } from './head-of-soft-engg/head-of-soft-engg.component';
import { TeamLeadComponent } from './team-lead/team-lead.component';
import { SoftwareEngineeringComponent } from './software-engineering/software-engineering.component';
import { FormsModule } from '@angular/forms';
import { EmplyoeeListComponent } from './emplyoee-list/emplyoee-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HighlightDirective } from './highlight.directive';
import { CreateEmployeeComponent } from '../../src/app/create-employee/create-employee.component';
import { StoredComponent } from './stored/stored.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    EmployeeDetailsComponent,
    MarketingDetailsComponent,
    FinanceDetailsComponent,
    HumanResourcesDetailsComponent,
    InformationTechnologyDetailsComponent,
    AdministrationDetailsComponent,
    AboutUsDetailsComponent,
    FounderComponent,
    CeoComponent,
    CountryMngComponent,
    HeadOfSoftEnggComponent,
    TeamLeadComponent,
    SoftwareEngineeringComponent,
    EmplyoeeListComponent,
    ContactDetailsComponent,
    HighlightDirective,
    CreateEmployeeComponent,
    StoredComponent,
    RatingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
    Ng2SearchPipeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
