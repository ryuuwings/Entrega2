import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFruitPage } from './delete-fruit.page';

describe('DeleteFruitPage', () => {
  let component: DeleteFruitPage;
  let fixture: ComponentFixture<DeleteFruitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFruitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFruitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
