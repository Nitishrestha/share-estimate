import { Component, Input, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company, Information } from '../company/company.model';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  @Input() informations: Information[];
  @Input() company: Company;
  @Input() purchasableQuantity: number;
  @Input()totalCashBonus: number;
  @Input()totalShareNetworth: number;

  constructor() { }

  ngOnInit() {

  }

}
