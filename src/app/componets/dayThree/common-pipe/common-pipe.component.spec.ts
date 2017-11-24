import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPipeComponent } from './common-pipe.component';

describe('CommonPipeComponent', () => {
  let component: CommonPipeComponent;
  let fixture: ComponentFixture<CommonPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
