import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertdataComponent } from './insertdata.component';

describe('InsertdataComponent', () => {
  let component: InsertdataComponent;
  let fixture: ComponentFixture<InsertdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
