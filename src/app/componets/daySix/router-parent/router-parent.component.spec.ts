import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterParentComponent } from './router-parent.component';

describe('RouterParentComponent', () => {
  let component: RouterParentComponent;
  let fixture: ComponentFixture<RouterParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
