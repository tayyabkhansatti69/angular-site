import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorsStatisticsComponent } from './tutors-statistics.component';

describe('TutorsStatisticsComponent', () => {
  let component: TutorsStatisticsComponent;
  let fixture: ComponentFixture<TutorsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorsStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
