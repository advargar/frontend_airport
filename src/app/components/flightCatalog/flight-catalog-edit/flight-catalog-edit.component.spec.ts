import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCatalogEditComponent } from './flight-catalog-edit.component';

describe('FlightCatalogEditComponent', () => {
  let component: FlightCatalogEditComponent;
  let fixture: ComponentFixture<FlightCatalogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightCatalogEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCatalogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
