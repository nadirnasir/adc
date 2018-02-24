import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempbranchComponent } from './tempbranch.component';

describe('TempbranchComponent', () => {
  let component: TempbranchComponent;
  let fixture: ComponentFixture<TempbranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempbranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
