import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindElementPageComponent } from './find-element-page.component';

describe('FindElementPageComponent', () => {
  let component: FindElementPageComponent;
  let fixture: ComponentFixture<FindElementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindElementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindElementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
