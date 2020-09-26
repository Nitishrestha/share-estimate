import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-summary',
  templateUrl: './company-summary.component.html',
  styleUrls: ['./company-summary.component.css']
})
export class CompanySummaryComponent implements OnInit {

  @Input() totalShareNetworth: number;
  @Input() totalCashBonus: number;

  constructor() { }

  ngOnInit() {
  }

}
