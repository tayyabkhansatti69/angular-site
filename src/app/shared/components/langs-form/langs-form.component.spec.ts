import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangsFormComponent } from './langs-form.component';

describe('LangsFormComponent', () => {
  let component: LangsFormComponent;
  let fixture: ComponentFixture<LangsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LangsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
