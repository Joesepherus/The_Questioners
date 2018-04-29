import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEditModalComponent } from './blog-edit-modal.component';

describe('BlogEditModalComponent', () => {
  let component: BlogEditModalComponent;
  let fixture: ComponentFixture<BlogEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
