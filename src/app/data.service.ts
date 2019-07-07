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
import { NavButton } from './navbutton-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private profileData: ProfileData;
  private navButtonData: NavButton[];

  constructor() {
    this.profileData = new ProfileData();
    this.navButtonData = NavButton.getData();
  }

  getNavigationData(): Observable<NavButton[]> {
    return of(this.navButtonData);
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
