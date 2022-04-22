import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryLevelQuestionsComponent } from './entry-level-questions.component';

describe('EntryLevelQuestionsComponent', () => {
  let component: EntryLevelQuestionsComponent;
  let fixture: ComponentFixture<EntryLevelQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryLevelQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryLevelQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
