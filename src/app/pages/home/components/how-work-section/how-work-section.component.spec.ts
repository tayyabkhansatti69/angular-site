import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWorkSectionComponent } from './how-work-section.component';

describe('HowWorkSectionComponent', () => {
  let component: HowWorkSectionComponent;
  let fixture: ComponentFixture<HowWorkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowWorkSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowWorkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
