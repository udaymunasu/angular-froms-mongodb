import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
// import { MarketingComponent } from './components/marketing/marketing.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { NgChartsModule } from 'ng2-charts';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackComponent } from './components/feedback/feedback.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
// import { MarketingChildComponent } from './components/marketing/marketing-child/marketing-child.component';
import { MarketingCompComponent } from './components/marketing-comp/marketing-comp.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent,
    SocialMediaComponent,
    FeedbackComponent,
   MarketingCompComponent,
  ClickOutsideDirective,
 
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    NgChartsModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatMenuModule,
    HttpClientModule,
MatButtonModule,
MatProgressBarModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
