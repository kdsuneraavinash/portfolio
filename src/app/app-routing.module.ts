import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationPageComponent } from './content/education-page/education-page.component';
import { ProjectsPageComponent } from './content/projects-page/projects-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    component: ProjectsPageComponent
  },
  {
    path: 'education',
    component: EducationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
