import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathSurvivalComponent } from './path-survival.component';

describe('PathSurvivalComponent', () => {
  let component: PathSurvivalComponent;
  let fixture: ComponentFixture<PathSurvivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathSurvivalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PathSurvivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
