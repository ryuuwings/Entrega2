import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFruitPage } from './add-fruit.page';

describe('AddFruitPage', () => {
  let component: AddFruitPage;
  let fixture: ComponentFixture<AddFruitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFruitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFruitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
