import {Injectable} from '@angular/core';
import {Project} from './data/project';
import {Education} from './data/education';
import {Observable, of} from 'rxjs';
import {Achievement} from './data/achievement';
import {SkillGroup} from './data/skill';
import {Profile} from './data/profile';
import {NavButton} from './data/nav-button';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly profileData: Profile;
  private readonly navButtonData: NavButton[];
  private readonly educationData: Education[];
  private readonly projectsData: Project[];
  private readonly skillsData: SkillGroup[];
  private readonly achievementsData: Achievement[];

  constructor() {
    this.profileData = new Profile();
    this.navButtonData = NavButton.data;
    this.educationData = Education.data;
    this.projectsData = Project.data;
    this.skillsData = SkillGroup.data;
    this.achievementsData = Achievement.data;
  }

  getNavigationData(): Observable<NavButton[]> {
    return of(this.navButtonData);
  }

  getProfileData(): Observable<Profile> {
    return of(this.profileData);
  }

  getEducationData(): Observable<Education[]> {
    return of(this.educationData);
  }

  getProjectsData(): Observable<Project[]> {
    return of(this.projectsData);
  }

  getAchievementsData(): Observable<Achievement[]> {
    return of(this.achievementsData);
  }

  getSkillsData(): Observable<SkillGroup[]> {
    return of(this.skillsData);
  }
}
