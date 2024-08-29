import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerDetalhesPaisPage } from './ver-detalhes-pais.page';

describe('VerDetalhesPaisPage', () => {
  let component: VerDetalhesPaisPage;
  let fixture: ComponentFixture<VerDetalhesPaisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerDetalhesPaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
