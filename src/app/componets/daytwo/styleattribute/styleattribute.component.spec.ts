import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleattributeComponent } from './styleattribute.component';

describe('StyleattributeComponent', () => {
  let component: StyleattributeComponent;
  let fixture: ComponentFixture<StyleattributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleattributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleattributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
