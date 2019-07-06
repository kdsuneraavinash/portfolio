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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarTopComponent,
    SidebarMiddleComponent,
    SidebarBottomComponent,
    ContentComponent,
    EducationCard,
    EducationPageComponent
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
