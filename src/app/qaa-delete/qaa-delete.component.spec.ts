import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaaDeleteComponent } from './qaa-delete.component';

describe('QaaDeleteComponent', () => {
  let component: QaaDeleteComponent;
  let fixture: ComponentFixture<QaaDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaaDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
