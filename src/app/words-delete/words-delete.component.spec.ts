import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsDeleteComponent } from './words-delete.component';

describe('WordsDeleteComponent', () => {
  let component: WordsDeleteComponent;
  let fixture: ComponentFixture<WordsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
