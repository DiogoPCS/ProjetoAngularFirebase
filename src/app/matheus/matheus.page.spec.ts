import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatheusPage } from './matheus.page';

describe('MatheusPage', () => {
  let component: MatheusPage;
  let fixture: ComponentFixture<MatheusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatheusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
