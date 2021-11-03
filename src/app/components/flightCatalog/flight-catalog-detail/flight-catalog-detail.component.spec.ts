import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCatalogDetailComponent } from './flight-catalog-detail.component';

describe('FlightCatalogDetailComponent', () => {
  let component: FlightCatalogDetailComponent;
  let fixture: ComponentFixture<FlightCatalogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightCatalogDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCatalogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
