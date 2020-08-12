import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedisplayshortnameComponent } from './servicedisplayshortname.component';

describe('ServicedisplayshortnameComponent', () => {
  let component: ServicedisplayshortnameComponent;
  let fixture: ComponentFixture<ServicedisplayshortnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicedisplayshortnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicedisplayshortnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
