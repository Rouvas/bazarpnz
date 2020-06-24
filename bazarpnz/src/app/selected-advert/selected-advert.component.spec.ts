import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAdvertComponent } from './selected-advert.component';

describe('SelectedAdvertComponent', () => {
  let component: SelectedAdvertComponent;
  let fixture: ComponentFixture<SelectedAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedAdvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
