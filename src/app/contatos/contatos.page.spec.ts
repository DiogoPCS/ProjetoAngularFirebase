import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContatosPage } from './contatos.page';

describe('ContatosPage', () => {
  let component: ContatosPage;
  let fixture: ComponentFixture<ContatosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
