import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoljOssComponent } from './folj-oss.component';

describe('FoljOssComponent', () => {
  let component: FoljOssComponent;
  let fixture: ComponentFixture<FoljOssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoljOssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoljOssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
