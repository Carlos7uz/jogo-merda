import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottenRealmComponent } from './forgotten-realm.component';

describe('ForgottenRealmComponent', () => {
  let component: ForgottenRealmComponent;
  let fixture: ComponentFixture<ForgottenRealmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgottenRealmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgottenRealmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
