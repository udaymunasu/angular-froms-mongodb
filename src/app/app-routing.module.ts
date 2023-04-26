import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { MarketingCompComponent } from './components/marketing-comp/marketing-comp.component';
// import { MarketingComponent } from './components/marketing/marketing.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {path:'',component:BasicInfoComponent},
  {path:'basic-info',pathMatch: "full",component:BasicInfoComponent},
  {path:'marketing',component:MarketingCompComponent, canActivate: [AuthGuard] },
  {path:'social-media',component:SocialMediaComponent, canActivate: [AuthGuard] },
  {path:'feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
