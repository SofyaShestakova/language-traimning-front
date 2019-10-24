import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingWorksComponent } from './rating-works.component';

describe('RatingWorksComponent', () => {
  let component: RatingWorksComponent;
  let fixture: ComponentFixture<RatingWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
