import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrorummetComponent } from './microrummet.component';

describe('MicrorummetComponent', () => {
  let component: MicrorummetComponent;
  let fixture: ComponentFixture<MicrorummetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrorummetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrorummetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
