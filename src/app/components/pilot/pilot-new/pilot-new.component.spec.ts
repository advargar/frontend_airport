import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotNewComponent } from './pilot-new.component';

describe('PilotNewComponent', () => {
  let component: PilotNewComponent;
  let fixture: ComponentFixture<PilotNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
