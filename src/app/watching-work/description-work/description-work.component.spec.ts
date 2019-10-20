import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionWorkComponent } from './description-work.component';

describe('DescriptionWorkComponent', () => {
  let component: DescriptionWorkComponent;
  let fixture: ComponentFixture<DescriptionWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
