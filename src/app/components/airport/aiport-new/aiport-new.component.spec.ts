import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiportNewComponent } from './aiport-new.component';

describe('AiportNewComponent', () => {
  let component: AiportNewComponent;
  let fixture: ComponentFixture<AiportNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiportNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiportNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
