import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarTopComponent } from './sidebar/sidebar-top/sidebar-top.component';
import { SidebarMiddleComponent } from './sidebar/sidebar-middle/sidebar-middle.component';
import { SidebarBottomComponent } from './sidebar/sidebar-bottom/sidebar-bottom.component';
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
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        SidebarTopComponent,
        SidebarMiddleComponent,
        SidebarBottomComponent,
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
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {
}
