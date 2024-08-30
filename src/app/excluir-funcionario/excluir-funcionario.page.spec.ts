import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcluirFuncionarioPage } from './excluir-funcionario.page';

describe('ExcluirFuncionarioPage', () => {
  let component: ExcluirFuncionarioPage;
  let fixture: ComponentFixture<ExcluirFuncionarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExcluirFuncionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
