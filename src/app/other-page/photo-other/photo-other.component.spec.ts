import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoOtherComponent } from './photo-other.component';

describe('PhotoOtherComponent', () => {
  let component: PhotoOtherComponent;
  let fixture: ComponentFixture<PhotoOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
