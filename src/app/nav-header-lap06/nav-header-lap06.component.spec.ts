import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderLap06Component } from './nav-header-lap06.component';

describe('NavHeaderLap06Component', () => {
  let component: NavHeaderLap06Component;
  let fixture: ComponentFixture<NavHeaderLap06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHeaderLap06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHeaderLap06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
