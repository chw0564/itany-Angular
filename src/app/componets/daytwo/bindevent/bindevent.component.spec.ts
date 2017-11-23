import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindeventComponent } from './bindevent.component';

describe('BindeventComponent', () => {
  let component: BindeventComponent;
  let fixture: ComponentFixture<BindeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
