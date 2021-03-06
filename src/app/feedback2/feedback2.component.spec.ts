/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Feedback2Component } from './feedback2.component';

describe('Feedback2Component', () => {
  let component: Feedback2Component;
  let fixture: ComponentFixture<Feedback2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feedback2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feedback2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
