import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyscQuestionsComponent } from './nysc-questions.component';

describe('NyscQuestionsComponent', () => {
  let component: NyscQuestionsComponent;
  let fixture: ComponentFixture<NyscQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyscQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NyscQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
