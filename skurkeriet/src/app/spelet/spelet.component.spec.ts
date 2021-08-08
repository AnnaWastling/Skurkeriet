import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeletComponent } from './spelet.component';

describe('SpeletComponent', () => {
  let component: SpeletComponent;
  let fixture: ComponentFixture<SpeletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
