import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterChildTwoComponent } from './router-child-two.component';

describe('RouterChildTwoComponent', () => {
  let component: RouterChildTwoComponent;
  let fixture: ComponentFixture<RouterChildTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterChildTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
