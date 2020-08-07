import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedisplaynameComponent } from './servicedisplayname.component';

describe('ServicedisplaynameComponent', () => {
  let component: ServicedisplaynameComponent;
  let fixture: ComponentFixture<ServicedisplaynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicedisplaynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicedisplaynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
