import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhePaisPage } from './detalhe-pais.page';

describe('DetalhePaisPage', () => {
  let component: DetalhePaisPage;
  let fixture: ComponentFixture<DetalhePaisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalhePaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
