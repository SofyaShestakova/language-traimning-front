import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingWorkComponent } from './writing-work.component';

describe('WritingWorkComponent', () => {
  let component: WritingWorkComponent;
  let fixture: ComponentFixture<WritingWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
