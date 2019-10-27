import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewcard8Component } from './viewcard8.component';

describe('Viewcard8Component', () => {
  let component: Viewcard8Component;
  let fixture: ComponentFixture<Viewcard8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewcard8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewcard8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
