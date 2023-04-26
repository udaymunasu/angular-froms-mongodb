import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  CLIENT_AGE,
  TACTICS,
} from 'src/app/constants/onbordingSurvey.constants';
import { SurveyDataService } from 'src/app/service/survey-data.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
  tactics: any;
  clientAge: any;
  thirdFormGroup: any;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private surveyData: SurveyDataService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.form();
    this.tactics = TACTICS;
    this.clientAge = CLIENT_AGE;
  }
  form() {
    this.thirdFormGroup = this.formBuilder.group({
      clientAge: ['', [Validators.required]],
      websiteLink: [''],
      tactics: [''],
      facebook: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https://facebook.com/(?![a-zA-Z0-9_]+/)([a-zA-Z0-9_]+))'
          ),
        ],
      ],
      twitter: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https://twitter.com/(?![a-zA-Z0-9_]+/)([a-zA-Z0-9_]+))'
          ),
        ],
      ],
      linkedIn: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https://linkedin.com/(?![a-zA-Z0-9_]+/)([a-zA-Z0-9_]+))'
          ),
        ],
      ],
    });
  }
  openDialog(content: any) {
    this.dialog.open(content, {
      width: '250px',
    });
  }
  onFormSubmit() {
    this.surveyData.postdata(this.thirdFormGroup.value).subscribe((data) => {
      console.log(data);
    });
  }
}
