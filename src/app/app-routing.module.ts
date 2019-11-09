import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./component/landing/landing.component";
import {PersonalAreaComponent} from "./component/personal-area/personal-area.component";
import {AppComponent} from "./component/app.component";
import {DoingWorkComponent} from "./component/doing-work/doing-work.component";
import {WatchingWorkComponent} from "./component/watching-work/watching-work.component";
import {ForumComponent} from "./component/forum/forum.component";
import {RatingComponent} from "./component/rating/rating.component";
import {StatisticsComponent} from "./component/statistics/statistics.component";
import {OtherPageComponent} from "./component/other-page/other-page.component";
import {AssessmentComponent} from "./component/assessment/assessment.component";
import {WriteMessageComponent} from './component/forum/write-message/write-message.component';
import {RegistrationComponent} from "./component/registration/registration.component";
import {AuthComponent} from "./component/auth/auth.component";
import {ModeratorPageComponent} from "./component/moderator-page/moderator-page.component";



const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: LandingComponent},
  { path: 'main', component: AppComponent},
  { path: 'personal-area', component: PersonalAreaComponent},
  { path: 'doing-work', component: DoingWorkComponent},
  { path: 'watching-work', component: WatchingWorkComponent},
  { path: 'rating', component: RatingComponent},
  { path: 'statistics', component: StatisticsComponent},
  { path: 'other-page', component: OtherPageComponent},
  { path: 'assignment', component: AssessmentComponent},
  { path: 'forum', component: ForumComponent, children: [
      {path: 'theme/:id', component: WriteMessageComponent}
    ]},
  {path: 'registration', component:RegistrationComponent},
  {path: 'auth', component:AuthComponent},
  {path:'moderator-page', component:ModeratorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
