import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDetailsComponent } from './travel-details.component.ts';

describe('TravelDetailsComponent', () => {
  let component: TravelDetailsComponent;
  let fixture: ComponentFixture<TravelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
