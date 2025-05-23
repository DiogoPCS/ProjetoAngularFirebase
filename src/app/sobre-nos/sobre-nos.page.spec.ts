import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobreNosPage } from './sobre-nos.page';

describe('SobreNosPage', () => {
  let component: SobreNosPage;
  let fixture: ComponentFixture<SobreNosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SobreNosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
