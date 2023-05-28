import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { AboutPageComponent } from './content/about-page/about-page.component'
import { HttpClientModule } from '@angular/common/http'
import { SidebarBottomComponent } from './sidebar/sidebar-bottom/sidebar-bottom.component'
import { SidebarTopComponent } from './sidebar/sidebar-top/sidebar-top.component'
import { SidebarMiddleComponent } from './sidebar/sidebar-middle/sidebar-middle.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CommonIconComponent } from './content/common/common-icon/common-icon.component'
import { TitleComponent } from './content/common/title/title.component'
import { EducationPageComponent } from './content/education-page/education-page.component'
import { CommonCardComponent } from './content/common/common-card/common-card.component'
import { SpinnerComponent } from './content/common/spinner/spinner.component'
import { ProjectsPageComponent } from './content/projects-page/projects-page.component'
import { CommonLinkedCardComponent } from './content/common/common-linked-card/common-linked-card.component'
import { AchievementsPageComponent } from './content/achievements-page/achievements-page.component'
import { TeamMateComponent } from './content/common/team-mate/team-mate.component'
import { ExperiencePageComponent } from './content/experience-page/experience-page.component'
import { CommonContentComponent } from './content/common/common-content/common-content.component'

@NgModule({
  declarations: [
    AppComponent,
    CommonIconComponent,
    CommonContentComponent,
    TitleComponent,
    SpinnerComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarBottomComponent,
    SidebarMiddleComponent,
    SidebarTopComponent,
    AboutPageComponent,
    EducationPageComponent,
    CommonCardComponent,
    ExperiencePageComponent,
    ProjectsPageComponent,
    AchievementsPageComponent,
    CommonLinkedCardComponent,
    TeamMateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
