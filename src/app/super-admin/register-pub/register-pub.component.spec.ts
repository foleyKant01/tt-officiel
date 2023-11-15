import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPubComponent } from './register-pub.component';

describe('RegisterPubComponent', () => {
  let component: RegisterPubComponent;
  let fixture: ComponentFixture<RegisterPubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPubComponent]
    });
    fixture = TestBed.createComponent(RegisterPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
