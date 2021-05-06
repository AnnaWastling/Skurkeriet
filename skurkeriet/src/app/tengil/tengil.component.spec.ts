import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TengilComponent } from './tengil.component';

describe('TengilComponent', () => {
  let component: TengilComponent;
  let fixture: ComponentFixture<TengilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TengilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TengilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
