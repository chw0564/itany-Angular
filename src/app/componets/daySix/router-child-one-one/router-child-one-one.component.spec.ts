import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterChildOneOneComponent } from './router-child-one-one.component';

describe('RouterChildOneOneComponent', () => {
  let component: RouterChildOneOneComponent;
  let fixture: ComponentFixture<RouterChildOneOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterChildOneOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterChildOneOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
