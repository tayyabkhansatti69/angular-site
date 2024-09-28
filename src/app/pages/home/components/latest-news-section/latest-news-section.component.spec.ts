import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsSectionComponent } from './latest-news-section.component';

describe('LatestNewsSectionComponent', () => {
  let component: LatestNewsSectionComponent;
  let fixture: ComponentFixture<LatestNewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestNewsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestNewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
