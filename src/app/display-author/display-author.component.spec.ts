import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAuthorComponent } from './display-author.component';

describe('DisplayAuthorComponent', () => {
  let component: DisplayAuthorComponent;
  let fixture: ComponentFixture<DisplayAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayAuthorComponent]
    });
    fixture = TestBed.createComponent(DisplayAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
