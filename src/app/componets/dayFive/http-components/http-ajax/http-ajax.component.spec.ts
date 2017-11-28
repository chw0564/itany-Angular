import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAjaxComponent } from './http-ajax.component';

describe('HttpAjaxComponent', () => {
  let component: HttpAjaxComponent;
  let fixture: ComponentFixture<HttpAjaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpAjaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
