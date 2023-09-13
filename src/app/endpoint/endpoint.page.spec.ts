import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EndpointPage } from './endpoint.page';

describe('EndpointPage', () => {
  let component: EndpointPage;
  let fixture: ComponentFixture<EndpointPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EndpointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
