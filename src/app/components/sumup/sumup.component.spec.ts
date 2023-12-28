import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumupComponent } from './sumup.component';

describe('SumupComponent', () => {
  let component: SumupComponent;
  let fixture: ComponentFixture<SumupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
