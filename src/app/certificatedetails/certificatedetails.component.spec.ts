import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatedetailsComponent } from './certificatedetails.component';

describe('CertificatedetailsComponent', () => {
  let component: CertificatedetailsComponent;
  let fixture: ComponentFixture<CertificatedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
