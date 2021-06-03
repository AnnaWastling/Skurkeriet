import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelkortComponent } from './spelkort.component';

describe('SpelkortComponent', () => {
  let component: SpelkortComponent;
  let fixture: ComponentFixture<SpelkortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpelkortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpelkortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
