import{ NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import { HeaderComponent } from './header/header.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { PersonalInfoComponent } from './personal-area/personal-info/personal-info.component';
import { GraphicsComponent } from './personal-area/graphics/graphics.component';
import { DoingWorkComponent } from './doing-work/doing-work.component';
import { SendWorkComponent } from './doing-work/send-work/send-work.component';
import {HttpService} from "./http.service";
import { WatchingWorkComponent } from './watching-work/watching-work.component';
import { OtherWorksComponent } from './watching-work/other-works/other-works.component';
import {GoogleChartsModule} from 'angular-google-charts';
import { ForumComponent } from './forum/forum.component';
import { WriteMessageComponent } from './forum/write-message/write-message.component';
import { OtherMessageComponent } from './forum/other-message/other-message.component';
import { RatingComponent } from './rating/rating.component';
import { RatingWorksComponent } from './rating/rating-works/rating-works.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatGraphicsComponent } from './statistics/stat-graphics/stat-graphics.component';
import {QuillModule} from 'ngx-quill';
import {registerLocaleData} from '@angular/common';
import ruLocale from '@angular/common/locales/ru';
import { OtherPageComponent } from './other-page/other-page.component';
import { InfoComponent } from './other-page/info/info.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import { ModeratorPageComponent } from './moderator-page/moderator-page.component';



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
    SendWorkComponent,
    WatchingWorkComponent,
    OtherWorksComponent,
    ForumComponent,
    WriteMessageComponent,
    OtherMessageComponent,
    RatingComponent,
    RatingWorksComponent,
    StatisticsComponent,
    StatGraphicsComponent,
    OtherPageComponent,
    InfoComponent,
    AssignmentComponent,
    RegistrationComponent,
    MainComponent,
    AuthComponent,
    ModeratorPageComponent,
  ],
  providers:[HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
