import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalChoicesComponent } from './final-choices.component';

describe('FinalChoicesComponent', () => {
  let component: FinalChoicesComponent;
  let fixture: ComponentFixture<FinalChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalChoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
