import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFruitPage } from './update-fruit.page';

describe('UpdateFruitPage', () => {
  let component: UpdateFruitPage;
  let fixture: ComponentFixture<UpdateFruitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFruitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFruitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
