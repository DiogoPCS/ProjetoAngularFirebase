import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesenvolvedoresPage } from './desenvolvedores.page';

describe('DesenvolvedoresPage', () => {
  let component: DesenvolvedoresPage;
  let fixture: ComponentFixture<DesenvolvedoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DesenvolvedoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
