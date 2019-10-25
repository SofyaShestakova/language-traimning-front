import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAndMarkComponent } from './work-and-mark.component';

describe('WorkAndMarkComponent', () => {
  let component: WorkAndMarkComponent;
  let fixture: ComponentFixture<WorkAndMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAndMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAndMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
