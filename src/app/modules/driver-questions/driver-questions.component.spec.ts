import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverQuestionsComponent } from './driver-questions.component';

describe('DriverQuestionsComponent', () => {
  let component: DriverQuestionsComponent;
  let fixture: ComponentFixture<DriverQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
