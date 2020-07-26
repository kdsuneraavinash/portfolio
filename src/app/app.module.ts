import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarTopComponent } from './sidebar/sidebar-top/sidebar-top.component';
import { SidebarMiddleComponent } from './sidebar/sidebar-middle/sidebar-middle.component';
import { SidebarBottomComponent } from './sidebar/sidebar-bottom/sidebar-bottom.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EducationCard } from './content/education-page/education-card/education-card.component';
import { EducationPageComponent } from './content/education-page/education-page.component';
import { ProjectsPageComponent } from './content/projects-page/projects-page.component';
import { ProjectsCardComponent } from './content/projects-page/projects-card/projects-card.component';
import { AchievementsPageComponent } from './content/achievements-page/achievements-page.component';
import { AchievementsCardComponent } from './content/achievements-page/achievements-card/achievements-card.component';
import { TitleComponent } from './content/title/title.component';
import { SkillsPageComponent } from './content/skills-page/skills-page.component';
import { SkillsCardComponent } from './content/skills-page/skills-card/skills-card.component';
import { TeamMateComponent } from './content/team-mate/team-mate.component';
import { AboutPageComponent } from './content/about-page/about-page.component';
import { SpinnerComponent } from './content/spinner/spinner.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarTopComponent,
    SidebarMiddleComponent,
    SidebarBottomComponent,
    NavbarComponent,
    EducationCard,
    EducationPageComponent,
    ProjectsPageComponent,
    ProjectsCardComponent,
    AchievementsPageComponent,
    AchievementsCardComponent,
    TitleComponent,
    SkillsPageComponent,
    SkillsCardComponent,
    TeamMateComponent,
    AboutPageComponent,
    NavbarComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
