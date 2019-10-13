import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detaillap06Component } from './detaillap06.component';

describe('Detaillap06Component', () => {
  let component: Detaillap06Component;
  let fixture: ComponentFixture<Detaillap06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detaillap06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detaillap06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
