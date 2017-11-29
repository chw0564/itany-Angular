import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterChildOneComponent } from './router-child-one.component';

describe('RouterChildOneComponent', () => {
  let component: RouterChildOneComponent;
  let fixture: ComponentFixture<RouterChildOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterChildOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
