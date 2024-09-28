import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingFeaturesComponent } from './teaching-features.component';

describe('TeachingFeaturesComponent', () => {
  let component: TeachingFeaturesComponent;
  let fixture: ComponentFixture<TeachingFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachingFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
