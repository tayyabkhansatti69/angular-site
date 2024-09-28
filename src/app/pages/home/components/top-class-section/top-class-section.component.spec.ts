import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopClassSectionComponent } from './top-class-section.component';

describe('TopClassSectionComponent', () => {
  let component: TopClassSectionComponent;
  let fixture: ComponentFixture<TopClassSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopClassSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopClassSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
