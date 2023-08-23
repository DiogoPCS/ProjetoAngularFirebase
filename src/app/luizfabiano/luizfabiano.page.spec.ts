import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LuizfabianoPage } from './luizfabiano.page';

describe('LuizfabianoPage', () => {
  let component: LuizfabianoPage;
  let fixture: ComponentFixture<LuizfabianoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LuizfabianoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
