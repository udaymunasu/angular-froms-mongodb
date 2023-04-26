import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BasicInfoComponent } from './basic-info.component';

describe('BasicInfoComponent', () => {
  let component: BasicInfoComponent;
  let fixture: ComponentFixture<BasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ BasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('FormGroup should match with form elements', () => {
  //   const formElement =  fixture.debugElement.nativeElement.querySelector('#firstFormGroup');
  //   const inputElements = formElement.querySelectorAll('input');
  //   expect(inputElements.length).toEqual(7);
  // });

  it('should require valid email', () => {
    component.firstFormGroup.setValue({
      "firstName": "", 
      "middleName": "", 
      "lastName": "", 
      "birthday": "",
      "email": "invalidemail", 
      "communicationEmail": "invalidemail",
      "interests": ""
    });

    expect(component.firstFormGroup.valid).toEqual(false);
  });

  it('should require valid input details', () => {
    component.firstFormGroup.setValue({
      "firstName": "rekha", 
      "middleName": "rekha", 
      "lastName": "rekha", 
      "birthday": "12/04/1111",
      "email": "rekha@123", 
      "communicationEmail": "rekha@123",
      "interests": ""
    });

    expect(component.firstFormGroup.valid).toEqual(true);
  });

  // it('FirstName to be entered with minlength 5 & maxlenth 20', () => {
  //   component.firstFormGroup.firstName.length == 5;
  //   expect(component.firstFormGroup.firstName).toEqual(true);
  // });
  it('FirstName field validity', () => {
    const firstName = component.firstFormGroup.controls.firstName;
    expect(firstName.valid).toBeFalsy();

    firstName.setValue('');
    expect(firstName.hasError('required')).toBeTruthy();

  });

  it('FirstName minlength validity', () => {
    const firstName = component.firstFormGroup.controls.firstName;
    expect(firstName.valid).toBeFalsy();

    firstName.setValue('5');
    expect(firstName.hasError('minlength')).toBeTruthy();

  });

  it('FirstName maxlength validity', () => {
    const firstName = component.firstFormGroup.controls.firstName;
    expect(firstName.valid).toBeFalsy();

    firstName.setValue('20');
    expect(firstName.hasError('maxlength')).toBeTruthy();

  });

  it('Birthday field validity', () => {
    const birthday = component.firstFormGroup.controls.birthday;
    expect(birthday.valid).toBeFalsy();

    birthday.setValue('');
    expect(birthday.hasError('required')).toBeTruthy();

  });
  it('email field validity', () => {
    const email = component.firstFormGroup.controls.email;
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();

  });
  it('communication email field validity', () => {
    const communicationEmail = component.firstFormGroup.controls.communicationEmail;
    expect(communicationEmail.valid).toBeFalsy();

    communicationEmail.setValue('');
    expect(communicationEmail.hasError('required')).toBeTruthy();

  });

});
