import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {PersonalAreaComponent} from "./personal-area/personal-area.component";
import {AppComponent} from "./app.component";
import {DoingWorkComponent} from "./doing-work/doing-work.component";
import {WatchingWorkComponent} from "./watching-work/watching-work.component";
import {ForumComponent} from "./forum/forum.component";
import {RatingComponent} from "./rating/rating.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {OtherPageComponent} from "./other-page/other-page.component";
import {AssignmentComponent} from "./assignment/assignment.component";
import {WriteMessageComponent} from './forum/write-message/write-message.component';
import {RegistrationComponent} from "./registration/registration.component";
import {AuthComponent} from "./auth/auth.component";



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
  { path: 'assignment', component: AssignmentComponent},
  { path: 'forum', component: ForumComponent, children: [
      {path: 'theme/:id', component: WriteMessageComponent}
    ]},
  {path: 'registration', component:RegistrationComponent},
  {path: 'auth', component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
