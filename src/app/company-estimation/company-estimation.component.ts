import { Component, Input, OnInit } from '@angular/core';
import { Information } from '../company/company.model';

@Component({
  selector: 'app-company-estimation',
  templateUrl: './company-estimation.component.html',
  styleUrls: ['./company-estimation.component.css']
})
export class CompanyEstimationComponent implements OnInit {

  @Input() informations: Information[];
  @Input() totalCashBonus: number;
  @Input() totalShareNetworth: number;

  constructor() { }

  ngOnInit() {
  }

}
