import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiComponentComponent } from './di-component.component';

describe('DiComponentComponent', () => {
  let component: DiComponentComponent;
  let fixture: ComponentFixture<DiComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
