import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnipComponent } from './turnip.component';

describe('TurnipComponent', () => {
  let component: TurnipComponent;
  let fixture: ComponentFixture<TurnipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
