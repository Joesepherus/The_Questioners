import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaaEditModalComponent } from './qaa-edit-modal.component';

describe('QaaEditModalComponent', () => {
  let component: QaaEditModalComponent;
  let fixture: ComponentFixture<QaaEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaaEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaaEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
