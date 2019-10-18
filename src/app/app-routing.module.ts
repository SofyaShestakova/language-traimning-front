import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {PersonalAreaComponent} from "./personal-area/personal-area.component";
import {AppComponent} from "./app.component";
import {DoingWorkComponent} from "./doing-work/doing-work.component";


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: LandingComponent},
  { path: 'main', component: AppComponent},
  { path: 'personal-area', component: PersonalAreaComponent},
  { path: 'doing-work', component: DoingWorkComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
