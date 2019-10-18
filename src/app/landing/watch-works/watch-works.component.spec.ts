import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchWorksComponent } from './watch-works.component';

describe('WatchWorksComponent', () => {
  let component: WatchWorksComponent;
  let fixture: ComponentFixture<WatchWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
