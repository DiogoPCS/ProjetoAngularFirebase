import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiogoPage } from './diogo.page';

describe('DiogoPage', () => {
  let component: DiogoPage;
  let fixture: ComponentFixture<DiogoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
