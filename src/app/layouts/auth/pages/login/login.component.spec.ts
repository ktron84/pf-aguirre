import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../auth.service';
import { SharedModule } from '../../../../shared/shared.module';
import { Validators } from '@angular/forms';
import { MockProvider } from 'ng-mocks';

describe('LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedModule],
      providers: [MockProvider(AuthService)],
    });

    component = TestBed.createComponent(LoginComponent).componentInstance;
  });

  it('should create an instance of LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should require email and password', () => {
    expect(
      component.loginForm.get('email')?.hasValidator(Validators.required)
    ).toBeTrue();

    expect(
      component.loginForm.get('password')?.hasValidator(Validators.required)
    ).toBeTrue();
  });

  it('should mark all form fields as touched if the form is invalid and onSubmit is called', () => {
    component.loginForm.patchValue({
      email: '',
      password: '',
    });

    expect(component.loginForm.invalid).toBeTrue();

    const spyOnMarkAllAsTouched = spyOn(
      component.loginForm,
      'markAllAsTouched'
    );

    component.onSubmit();

    expect(spyOnMarkAllAsTouched).toHaveBeenCalled();
  });
});
