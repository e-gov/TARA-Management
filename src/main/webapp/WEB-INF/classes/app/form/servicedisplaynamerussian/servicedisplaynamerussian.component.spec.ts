import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedisplaynamerussianComponent } from './servicedisplaynamerussian.component';

describe('ServicedisplaynamerussianComponent', () => {
  let component: ServicedisplaynamerussianComponent;
  let fixture: ComponentFixture<ServicedisplaynamerussianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicedisplaynamerussianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicedisplaynamerussianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
