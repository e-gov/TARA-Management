import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedisplayshortnameenglishComponent } from './servicedisplayshortnameenglish.component';

describe('ServicedisplayshortnameenglishComponent', () => {
  let component: ServicedisplayshortnameenglishComponent;
  let fixture: ComponentFixture<ServicedisplayshortnameenglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicedisplayshortnameenglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicedisplayshortnameenglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
