import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarlosPage } from './carlos.page';

describe('CarlosPage', () => {
  let component: CarlosPage;
  let fixture: ComponentFixture<CarlosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarlosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
