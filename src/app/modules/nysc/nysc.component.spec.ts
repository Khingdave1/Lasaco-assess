import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyscComponent } from './nysc.component';

describe('NyscComponent', () => {
  let component: NyscComponent;
  let fixture: ComponentFixture<NyscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NyscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
