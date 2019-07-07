import { Injectable } from '@angular/core';
import { projectsData } from './projects-data';
import { ProjectsCardData } from './projects-card-data';
import { educationData } from './education-data';
import { achievementsData } from './achievements-data';
import { EducationCardData } from './education-card-data';
import { Observable, of } from 'rxjs';
import { AchievementsCardData } from './achievements-card-data';
import { SkillsCardGroup } from './skills-card-data';
import { skillsData } from './skills-data';
import { ProfileData } from './profile-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private profileData: ProfileData;

  constructor() {
    this.profileData = new ProfileData();
  }

  getProfileData(): Observable<ProfileData> {
    return of(this.profileData);
  }

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
