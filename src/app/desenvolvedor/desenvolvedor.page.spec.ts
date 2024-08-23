import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesenvolvedorPage } from './desenvolvedor.page';

describe('DesenvolvedorPage', () => {
  let component: DesenvolvedorPage;
  let fixture: ComponentFixture<DesenvolvedorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DesenvolvedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
