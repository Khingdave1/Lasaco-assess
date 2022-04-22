import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternQuestionsComponent } from './intern-questions.component';

describe('InternQuestionsComponent', () => {
  let component: InternQuestionsComponent;
  let fixture: ComponentFixture<InternQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
