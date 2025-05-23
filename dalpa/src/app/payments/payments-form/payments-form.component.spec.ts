import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsFormComponent } from './payments-form.component';

describe('UsersFormComponent', () => {
  let component: PaymentsFormComponent;
  let fixture: ComponentFixture<PaymentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
