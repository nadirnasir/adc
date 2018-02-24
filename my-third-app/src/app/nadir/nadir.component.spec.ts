import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NadirComponent } from './nadir.component';

describe('NadirComponent', () => {
  let component: NadirComponent;
  let fixture: ComponentFixture<NadirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NadirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
