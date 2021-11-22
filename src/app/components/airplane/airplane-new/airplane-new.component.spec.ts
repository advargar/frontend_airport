import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneNewComponent } from './airplane-new.component';

describe('AirplaneNewComponent', () => {
  let component: AirplaneNewComponent;
  let fixture: ComponentFixture<AirplaneNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirplaneNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
