import { Injectable } from '@angular/core';
import { projectsData } from './projects-data';
import { ProjectsCardData } from './projects-card-data';
import { educationData } from './education-data';
import { achievementsData } from './achievements-data';
import { EducationCardData } from './education-card-data';
import { Observable, of } from 'rxjs';
import { AchievementsCardData } from './achievements-card-data';
import { SkillsCardData, SkillsCardGroup } from './skills-card-data';
import { skillsData } from './skills-data';

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

  getAchievementsData(): Observable<AchievementsCardData[]> {
    return of(achievementsData);
  }

  getSkillsData(): Observable<SkillsCardGroup[]> {
    return of(skillsData);
  }
}
