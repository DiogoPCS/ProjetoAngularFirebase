import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarFuncionarioPage } from './listar-funcionario.page';

describe('ListarFuncionarioPage', () => {
  let component: ListarFuncionarioPage;
  let fixture: ComponentFixture<ListarFuncionarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarFuncionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
