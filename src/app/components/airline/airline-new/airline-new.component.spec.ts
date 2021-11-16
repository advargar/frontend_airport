import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineNewComponent } from './airline-new.component';

describe('AirlineNewComponent', () => {
  let component: AirlineNewComponent;
  let fixture: ComponentFixture<AirlineNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
