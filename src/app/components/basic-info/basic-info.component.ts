import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SurveyDataService } from 'src/app/service/survey-data.service';
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {
  user : any;
  email: any;
  firstFormGroup: any;
 // public allowedAccess: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private surveyData: SurveyDataService,
    private http: HttpClient,
    private router: Router,
    private authService:AuthService
  ) {
   // this.allowedAccess = this.authService.isRouteAuthenticated();
  }
  ngOnInit(): void {
    this.form();
    localStorage.setItem('SessionUser',this.firstFormGroup);
  }
  form() {
    this.firstFormGroup = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(5),
        ],
      ],
      middleName: [''],
      lastName: [''],
      birthday: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
        ],
      ],
      communicationEmail: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
        ],
      ],
      interests: [''],
    });
  }
  submitFirstForm() {
    // this.authService.isRouteAuthenticated();
   // this.allowedAccess = this.authService.isRouteAuthenticated();
    // console.log(this.firstFormGroup.value);
    this.surveyData.postdata(this.firstFormGroup.value).subscribe((data) => {
      console.log(data);
    });
  }
}
