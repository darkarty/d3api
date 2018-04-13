import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterBattletagComponent } from './enter-battletag.component';

describe('EnterBattletagComponent', () => {
  let component: EnterBattletagComponent;
  let fixture: ComponentFixture<EnterBattletagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterBattletagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterBattletagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
