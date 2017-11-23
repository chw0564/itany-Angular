import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassattributeComponent } from './classattribute.component';

describe('ClassattributeComponent', () => {
  let component: ClassattributeComponent;
  let fixture: ComponentFixture<ClassattributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassattributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassattributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
