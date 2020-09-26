import { Injectable } from '@angular/core';
import { Information, Company, TableContent } from './company/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  infos: Information[] = [];
  tableContent: TableContent = new TableContent();

  public populateInformation(company: Company): TableContent {
    const investment = company.capitalDuration.capital;
    let currentShare = Math.floor(investment / company.price);
    let totalCashBonus = 0;
    for (let i = 1; i <= company.capitalDuration.duration; i++) {
      const info = new Information();
      info.year = i;
      info.cashBonus = Math.floor(currentShare * company.expCashBonus);
      info.bonusShare = Math.floor((company.expShareBonus / 100) * currentShare);
      info.totalShare = currentShare + info.bonusShare;
      currentShare = info.totalShare;
      totalCashBonus += info.cashBonus;
      this.infos.push(info);
    }
    this.tableContent.infos = this.infos;
    this.tableContent.totalCashBonus = totalCashBonus;
    this.tableContent.totalShareCount = this.infos[this.infos.length - 1].totalShare;
    return this.tableContent;
  }

  constructor() { }
}
