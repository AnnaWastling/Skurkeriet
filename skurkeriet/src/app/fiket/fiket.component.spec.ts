import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiketComponent } from './fiket.component';

describe('FiketComponent', () => {
  let component: FiketComponent;
  let fixture: ComponentFixture<FiketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
