import{ NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import { HeaderComponent } from './header/header.component';
import { WritingWorkComponent } from './landing/writing-work/writing-work.component';
import { WatchWorksComponent } from './landing/watch-works/watch-works.component';
import { EventsComponent } from './landing/events/events.component';
import { InformationComponent } from './landing/information/information.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { PhotoComponent } from './personal-area/photo/photo.component';
import { PersonalInfoComponent } from './personal-area/personal-info/personal-info.component';
import { GraphicsComponent } from './personal-area/graphics/graphics.component';
import { DoingWorkComponent } from './doing-work/doing-work.component';
import { DescriptionComponent } from './doing-work/description/description.component';
import { SendWorkComponent } from './doing-work/send-work/send-work.component';
import {HttpService} from "./http.service";
import { WatchingWorkComponent } from './watching-work/watching-work.component';
import { DescriptionWorkComponent } from './watching-work/description-work/description-work.component';
import { OtherWorksComponent } from './watching-work/other-works/other-works.component';
import {GoogleChartsModule} from 'angular-google-charts';
import { ForumComponent } from './forum/forum.component';
import { WriteMessageComponent } from './forum/write-message/write-message.component';
import { OtherMessageComponent } from './forum/other-message/other-message.component';
import { RatingComponent } from './rating/rating.component';
import { RatingWorksComponent } from './rating/rating-works/rating-works.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    LandingComponent,
    SidebarComponent,
    HeaderComponent,
    WritingWorkComponent,
    WatchWorksComponent,
    EventsComponent,
    InformationComponent,
    PersonalAreaComponent,
    PhotoComponent,
    PersonalInfoComponent,
    GraphicsComponent,
    DoingWorkComponent,
    DescriptionComponent,
    SendWorkComponent,
    WatchingWorkComponent,
    DescriptionWorkComponent,
    OtherWorksComponent,
    ForumComponent,
    WriteMessageComponent,
    OtherMessageComponent,
    RatingComponent,
    RatingWorksComponent,
  ],
  providers:[HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
