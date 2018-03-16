import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaaCreateComponent } from './qaa-create.component';

describe('QaaCreateComponent', () => {
  let component: QaaCreateComponent;
  let fixture: ComponentFixture<QaaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
