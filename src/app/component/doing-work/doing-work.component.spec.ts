import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoingWorkComponent } from './doing-work.component';

describe('DoingWorkComponent', () => {
  let component: DoingWorkComponent;
  let fixture: ComponentFixture<DoingWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoingWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoingWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
