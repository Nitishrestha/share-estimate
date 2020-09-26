import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEstimationComponent } from './company-estimation.component';

describe('CompanyEstimationComponent', () => {
  let component: CompanyEstimationComponent;
  let fixture: ComponentFixture<CompanyEstimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEstimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
