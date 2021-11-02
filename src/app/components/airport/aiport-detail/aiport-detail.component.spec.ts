import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiportDetailComponent } from './aiport-detail.component';

describe('AiportDetailComponent', () => {
  let component: AiportDetailComponent;
  let fixture: ComponentFixture<AiportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
