import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminboardComponent } from './adminboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AdminboardComponent', () => {
  let component: AdminboardComponent;
  let fixture: ComponentFixture<AdminboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminboardComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
