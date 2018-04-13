import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonseasonalComponent } from './nonseasonal.component';

describe('NonseasonalComponent', () => {
  let component: NonseasonalComponent;
  let fixture: ComponentFixture<NonseasonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonseasonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonseasonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
