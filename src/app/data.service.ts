import { Injectable } from '@angular/core';
import { projectsData } from './projects-data';
import { ProjectsCardData } from './projects-card-data';
import { educationData } from './education-data';
import { EducationCardData } from './education-card-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getEducationData(): Observable<EducationCardData[]> {
    return of(educationData);
  }

  getProjectsData(): Observable<ProjectsCardData[]> {
    return of(projectsData);
  }
}
