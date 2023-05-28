import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutPageComponent } from './content/about-page/about-page.component'
import { EducationPageComponent } from './content/education-page/education-page.component'
import { ProjectsPageComponent } from './content/projects-page/projects-page.component'
import { AchievementsPageComponent } from './content/achievements-page/achievements-page.component'
import { ExperiencePageComponent } from './content/experience-page/experience-page.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
  },
  {
    path: 'education',
    component: EducationPageComponent,
  },
  {
    path: 'experience',
    component: ExperiencePageComponent,
  },
  {
    path: 'achievements',
    component: AchievementsPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
