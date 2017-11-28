import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiComponentChild2Component } from './di-component-child2.component';

describe('DiComponentChild2Component', () => {
  let component: DiComponentChild2Component;
  let fixture: ComponentFixture<DiComponentChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiComponentChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiComponentChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
