import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EducationPageComponent} from './content/education-page/education-page.component';
import {ProjectsPageComponent} from './content/projects-page/projects-page.component';
import {AchievementsPageComponent} from './content/achievements-page/achievements-page.component';
import {SkillsPageComponent} from './content/skills-page/skills-page.component';
import {AboutPageComponent} from './content/about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'projects',
    component: ProjectsPageComponent
  },
  {
    path: 'education',
    component: EducationPageComponent
  },
  {
    path: 'achievements',
    component: AchievementsPageComponent
  },
  {
    path: 'skills',
    component: SkillsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
