import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrappanComponent } from './trappan.component';

describe('TrappanComponent', () => {
  let component: TrappanComponent;
  let fixture: ComponentFixture<TrappanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrappanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrappanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
