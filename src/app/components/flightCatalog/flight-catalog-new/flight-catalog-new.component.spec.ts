import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCatalogNewComponent } from './flight-catalog-new.component';

describe('FlightCatalogNewComponent', () => {
  let component: FlightCatalogNewComponent;
  let fixture: ComponentFixture<FlightCatalogNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightCatalogNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCatalogNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
