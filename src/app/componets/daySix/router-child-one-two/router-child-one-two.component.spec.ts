import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterChildOneTwoComponent } from './router-child-one-two.component';

describe('RouterChildOneTwoComponent', () => {
  let component: RouterChildOneTwoComponent;
  let fixture: ComponentFixture<RouterChildOneTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterChildOneTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterChildOneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
