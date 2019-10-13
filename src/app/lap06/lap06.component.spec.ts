import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lap06Component } from './lap06.component'

describe('Lap06Component', () => {
  let component: Lap06Component;
  let fixture: ComponentFixture<Lap06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lap06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lap06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
