import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEtsComponent } from './register-ets.component';

describe('RegisterEtsComponent', () => {
  let component: RegisterEtsComponent;
  let fixture: ComponentFixture<RegisterEtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterEtsComponent]
    });
    fixture = TestBed.createComponent(RegisterEtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
