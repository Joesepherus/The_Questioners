import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsEditModalComponent } from './words-edit-modal.component';

describe('WordsEditModalComponent', () => {
  let component: WordsEditModalComponent;
  let fixture: ComponentFixture<WordsEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
