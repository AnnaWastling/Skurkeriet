import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TappanComponent } from './tappan.component';

describe('TappanComponent', () => {
  let component: TappanComponent;
  let fixture: ComponentFixture<TappanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TappanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TappanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
