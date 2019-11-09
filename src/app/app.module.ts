import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './component/app.component';
import {LandingComponent} from './component/landing/landing.component';
import {SidebarComponent} from "./component/sidebar/sidebar.component";
import {HeaderComponent} from './component/header/header.component';
import {PersonalAreaComponent} from './component/personal-area/personal-area.component';
import {PersonalInfoComponent} from './component/personal-area/personal-info/personal-info.component';
import {GraphicsComponent} from './component/personal-area/graphics/graphics.component';
import {DoingWorkComponent} from './component/doing-work/doing-work.component';
import {HttpService} from "./http.service";
import {WatchingWorkComponent} from './component/watching-work/watching-work.component';
import {GoogleChartsModule} from 'angular-google-charts';
import {ForumComponent} from './component/forum/forum.component';
import {WriteMessageComponent} from './component/forum/write-message/write-message.component';
import {OtherMessageComponent} from './component/forum/other-message/other-message.component';
import {RatingComponent} from './component/rating/rating.component';
import {StatisticsComponent} from './component/statistics/statistics.component';
import {StatGraphicsComponent} from './component/statistics/stat-graphics/stat-graphics.component';
import {QuillModule} from 'ngx-quill';
import {registerLocaleData} from '@angular/common';
import ruLocale from '@angular/common/locales/ru';
import {OtherPageComponent} from './component/other-page/other-page.component';
import {AssessmentComponent} from './component/assessment/assessment.component';
import {RegistrationComponent} from './component/registration/registration.component';
import {MainComponent} from './component/main/main.component';
import {AuthComponent} from './component/auth/auth.component';
import {ModeratorPageComponent} from './component/moderator-page/moderator-page.component';


registerLocaleData(ruLocale, 'ru');

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule.forRoot(),
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LandingComponent,
    SidebarComponent,
    HeaderComponent,
    PersonalAreaComponent,
    PersonalInfoComponent,
    GraphicsComponent,
    DoingWorkComponent,
    WatchingWorkComponent,
    ForumComponent,
    WriteMessageComponent,
    OtherMessageComponent,
    RatingComponent,
    StatisticsComponent,
    StatGraphicsComponent,
    OtherPageComponent,
    AssessmentComponent,
    RegistrationComponent,
    MainComponent,
    AuthComponent,
    ModeratorPageComponent,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
