import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmplateTwoFormComponent } from './tmplate-two-form.component';

describe('TmplateTwoFormComponent', () => {
  let component: TmplateTwoFormComponent;
  let fixture: ComponentFixture<TmplateTwoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmplateTwoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmplateTwoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
