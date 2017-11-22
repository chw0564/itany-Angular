import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewoneComponent } from './newone.component';

describe('NewoneComponent', () => {
  let component: NewoneComponent;
  let fixture: ComponentFixture<NewoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
