import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelplanComponent } from './spelplan.component';

describe('SpelplanComponent', () => {
  let component: SpelplanComponent;
  let fixture: ComponentFixture<SpelplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpelplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpelplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
