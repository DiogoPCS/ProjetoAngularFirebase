import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VitorPage } from './vitor.page';

describe('VitorPage', () => {
  let component: VitorPage;
  let fixture: ComponentFixture<VitorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
