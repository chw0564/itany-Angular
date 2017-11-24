import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayBinddataComponent } from './twoway-binddata.component';

describe('TwowayBinddataComponent', () => {
  let component: TwowayBinddataComponent;
  let fixture: ComponentFixture<TwowayBinddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowayBinddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowayBinddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
