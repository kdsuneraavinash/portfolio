import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarTopComponent } from './sidebar/sidebar-top/sidebar-top.component';
import { SidebarMiddleComponent } from './sidebar/sidebar-middle/sidebar-middle.component';
import { SidebarBottomComponent } from './sidebar/sidebar-bottom/sidebar-bottom.component';
import { ContentComponent } from './content/content.component';
import { EducationCard } from './content/education-page/education-card/education-card.component';
import { EducationPageComponent } from './content/education-page/education-page.component';
import { ProjectsPageComponent } from './content/projects-page/projects-page.component';
import { ProjectsCardComponent } from './content/projects-page/projects-card/projects-card.component';
import { AchievementsPageComponent } from './content/achievements-page/achievements-page.component';
import { AchievementsCardComponent } from './content/achievements-page/achievements-card/achievements-card.component';
import { TitleComponent } from './content/title/title.component';
import { SkillsPageComponent } from './content/skills-page/skills-page.component';
import { SkillsCardComponent } from './content/skills-page/skills-card/skills-card.component';
import { TeamMateComponent } from './team-mate/team-mate.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarTopComponent,
    SidebarMiddleComponent,
    SidebarBottomComponent,
    ContentComponent,
    EducationCard,
    EducationPageComponent,
    ProjectsPageComponent,
    ProjectsCardComponent,
    AchievementsPageComponent,
    AchievementsCardComponent,
    TitleComponent,
    SkillsPageComponent,
    SkillsCardComponent,
    TeamMateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
