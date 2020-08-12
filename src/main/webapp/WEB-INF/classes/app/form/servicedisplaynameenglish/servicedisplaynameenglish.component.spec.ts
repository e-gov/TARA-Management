import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedisplaynameenglishComponent } from './servicedisplaynameenglish.component';

describe('ServicedisplaynameenglishComponent', () => {
  let component: ServicedisplaynameenglishComponent;
  let fixture: ComponentFixture<ServicedisplaynameenglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicedisplaynameenglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicedisplaynameenglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
