import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatGraphicsComponent } from './stat-graphics.component';

describe('StatGraphicsComponent', () => {
  let component: StatGraphicsComponent;
  let fixture: ComponentFixture<StatGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
