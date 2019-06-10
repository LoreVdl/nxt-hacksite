import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenTextPageComponent } from './hidden-text-page.component';

describe('HiddenTextPageComponent', () => {
  let component: HiddenTextPageComponent;
  let fixture: ComponentFixture<HiddenTextPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenTextPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenTextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
