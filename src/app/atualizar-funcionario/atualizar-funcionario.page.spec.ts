import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtualizarFuncionarioPage } from './atualizar-funcionario.page';

describe('AtualizarFuncionarioPage', () => {
  let component: AtualizarFuncionarioPage;
  let fixture: ComponentFixture<AtualizarFuncionarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AtualizarFuncionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
