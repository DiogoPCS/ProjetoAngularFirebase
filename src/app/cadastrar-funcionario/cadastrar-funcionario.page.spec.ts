import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarFuncionarioPage } from './cadastrar-funcionario.page';

describe('CadastrarFuncionarioPage', () => {
  let component: CadastrarFuncionarioPage;
  let fixture: ComponentFixture<CadastrarFuncionarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrarFuncionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
