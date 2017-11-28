import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiComponentChildComponent } from './di-component-child.component';

describe('DiComponentChildComponent', () => {
  let component: DiComponentChildComponent;
  let fixture: ComponentFixture<DiComponentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiComponentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiComponentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
