import { Component, OnInit } from '@angular/core';
import { CapitalDuration, Company, Information } from './company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  informations: Information[];
  totalCashBonus: number;
  company: Company;
  purchasableQuantity: number;
  totalShareNetworth: number;
  comp: Company;

  constructor(private service: CompanyService) { }

  onSubmitButtonClick(companyForm: Company) {
    const tableContent = this.service.populateInformation(companyForm);
    this.company = companyForm;
    this.informations = tableContent.infos;
    this.totalCashBonus = tableContent.totalCashBonus;
    this.purchasableQuantity = Math.floor(companyForm.capitalDuration.capital / companyForm.price);
    this.totalShareNetworth = tableContent.totalShareCount * companyForm.price;
  }

  ngOnInit() {
    const cap = new CapitalDuration(100000, 5);
    this.comp = new Company('MNBBL', 340, 20, 20, cap);
  }

}
