import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesGridComponent } from './courses-grid.component';

describe('CoursesGridComponent', () => {
  let component: CoursesGridComponent;
  let fixture: ComponentFixture<CoursesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
