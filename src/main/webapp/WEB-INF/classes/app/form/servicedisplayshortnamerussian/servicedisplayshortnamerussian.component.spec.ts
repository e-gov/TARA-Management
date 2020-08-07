import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedisplayshortnamerussianComponent } from './servicedisplayshortnamerussian.component';

describe('ServicedisplayshortnamerussianComponent', () => {
  let component: ServicedisplayshortnamerussianComponent;
  let fixture: ComponentFixture<ServicedisplayshortnamerussianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicedisplayshortnamerussianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicedisplayshortnamerussianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
