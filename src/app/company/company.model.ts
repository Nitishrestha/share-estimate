export class Company {

  constructor(
  public name: string,
  public price: number,
  public expCashBonus: number,
  public expShareBonus: number,
  public capitalDuration: CapitalDuration
  ) {}
}

export class CapitalDuration {
  constructor(public capital: number, public duration: number) {

  }
}

export class Information {
  public year: number; public cashBonus: number; public bonusShare: number;
  public totalShare: number; public company: Company;
  constructor() {}
}

export class TableContent {
  public infos: Information[]; public totalCashBonus: number; public totalShareCount: number;
}
