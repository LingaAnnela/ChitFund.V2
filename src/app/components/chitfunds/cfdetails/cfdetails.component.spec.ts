import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfdetailsComponent } from './cfdetails.component';

describe('CfdetailsComponent', () => {
  let component: CfdetailsComponent;
  let fixture: ComponentFixture<CfdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
