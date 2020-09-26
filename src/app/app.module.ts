import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { FormsModule} from '@angular/forms';
import { CompanyService } from './company.service';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyEstimationComponent } from './company-estimation/company-estimation.component';
import { CompanySummaryComponent } from './company-summary/company-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompanyInfoComponent,
    CompanyEstimationComponent,
    CompanySummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
