import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmplateFormComponent } from './tmplate-form.component';

describe('TmplateFormComponent', () => {
  let component: TmplateFormComponent;
  let fixture: ComponentFixture<TmplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
