import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkurkerietComponent } from './skurkeriet.component';

describe('SkurkerietComponent', () => {
  let component: SkurkerietComponent;
  let fixture: ComponentFixture<SkurkerietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkurkerietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkurkerietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
