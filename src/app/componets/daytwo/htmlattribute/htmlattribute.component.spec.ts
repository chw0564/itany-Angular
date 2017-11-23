import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlattributeComponent } from './htmlattribute.component';

describe('HtmlattributeComponent', () => {
  let component: HtmlattributeComponent;
  let fixture: ComponentFixture<HtmlattributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlattributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlattributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
