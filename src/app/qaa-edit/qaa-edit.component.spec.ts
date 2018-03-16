import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaaEditComponent } from './qaa-edit.component';

describe('QaaEditComponent', () => {
  let component: QaaEditComponent;
  let fixture: ComponentFixture<QaaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
