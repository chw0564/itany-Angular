import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalVariablesComponent } from './local-variables.component';

describe('LocalVariablesComponent', () => {
  let component: LocalVariablesComponent;
  let fixture: ComponentFixture<LocalVariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalVariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
