import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchingWorkComponent } from './watching-work.component';

describe('WatchingWorkComponent', () => {
  let component: WatchingWorkComponent;
  let fixture: ComponentFixture<WatchingWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchingWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchingWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
