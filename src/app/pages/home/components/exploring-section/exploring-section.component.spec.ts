import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploringSectionComponent } from './exploring-section.component';

describe('ExploringSectionComponent', () => {
  let component: ExploringSectionComponent;
  let fixture: ComponentFixture<ExploringSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploringSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploringSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
