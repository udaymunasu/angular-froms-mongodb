import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SurveyDataService } from 'src/app/service/survey-data.service';

@Component({
  selector: 'app-marketing-comp',
  templateUrl: './marketing-comp.component.html',
  styleUrls: ['./marketing-comp.component.scss']
})
export class MarketingCompComponent implements OnInit {
  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
      setTimeout(() =>{
        this.doughnutChartDataSets = [{ data : [this.moderate,this.growth,this.agGrowth]}]
      },1000)
  }
  public doughnutChartLabels: string[] = ['Moderate', 'Growth', 'Aggressive Growth'];
  public doughnutChartDataSets = [{ data: [10,10,10]}];  
  secondFormGroup: any;

  constructor(private eRef: ElementRef,private formBuilder: FormBuilder, private surveyData: SurveyDataService, private http: HttpClient) { }

  ngOnInit(): void {
 
   this.form();
  }
  form(){
    this.secondFormGroup = this.formBuilder.group({
      moderate: ['', [Validators.required]],
      growth: ['', [Validators.required]],
      agGrowth: ['', [Validators.required]],
    });
  }
handleChange(){
  console.log('clicked outside');
}
goToNextStep(){
  this.surveyData.postdata(this.secondFormGroup.value).subscribe(data =>{
    console.log(data);
  })
}
get moderate(){
  return this.secondFormGroup.get('moderate');
}
get growth(){
  return this.secondFormGroup.get('growth');
}
get agGrowth(){
  return this.secondFormGroup.get('agGrowth');
}
}
