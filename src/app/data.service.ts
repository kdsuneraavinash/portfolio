import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Project } from './data/project';
import { Education } from './data/education';
import { Achievement } from './data/achievement';
import { Skill } from './data/skill';
import { Profile } from './data/profile';
import { NavButton } from './data/nav-button';
import { TeamMate } from './data/team-mate';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly navButtonData: NavButton[];
  private readonly teamMatesData: BehaviorSubject<Map<string, TeamMate>>;
  private readonly profileDataObservable: BehaviorSubject<Profile>;
  private readonly educationDataObservable: BehaviorSubject<Education[]>;
  private readonly projectDataObservable: BehaviorSubject<Project[]>;
  private readonly achievementDataObservable: BehaviorSubject<Achievement[]>;
  private readonly skillDataObservable: BehaviorSubject<Skill[]>;

  constructor(private http: HttpClient) {
    const bust = (url) => `${url}?_cache_buster=${new Date().getTime()}`;

    this.navButtonData = NavButton.data;
    this.teamMatesData = new BehaviorSubject(new Map());
    this.profileDataObservable = new BehaviorSubject(new Profile());
    this.educationDataObservable = new BehaviorSubject([]);
    this.projectDataObservable = new BehaviorSubject([]);
    this.achievementDataObservable = new BehaviorSubject([]);
    this.skillDataObservable = new BehaviorSubject([]);
    this.http.get(bust(TeamMate.URL))
      .subscribe((v) => this.teamMatesData
        .next(v as Map<string, TeamMate>));
    this.http.get(bust(Skill.URL))
      .subscribe((v) => this.skillDataObservable
        .next((v as Skill[]).sort(Skill.compare)));
    this.http.get(bust(Education.URL))
      .subscribe((v) => this.educationDataObservable
        .next((v as Education[]).sort(Education.compare)));
    this.http.get(bust(Profile.URL))
      .subscribe((v) => this.profileDataObservable
        .next(v as Profile));
    this.http.get(bust(Achievement.URL))
      .subscribe((v) => this.achievementDataObservable
        .next((v as Achievement[]).sort(Achievement.compare)));
    this.http.get(bust(Project.URL))
      .subscribe((v) => this.projectDataObservable
        .next((v as Project[]).sort(Project.compare)));
  }

  getNavigationData(): Observable<NavButton[]> {
    return of(this.navButtonData);
  }

  getProfileData(): Observable<Profile> {
    return this.profileDataObservable;
  }

  getEducationData(): Observable<Education[]> {
    return this.educationDataObservable;
  }

  getProjectsData(): Observable<Project[]> {
    return this.projectDataObservable;
  }

  getAchievementsData(): Observable<Achievement[]> {
    return this.achievementDataObservable;
  }

  getSkillData(): Observable<Skill[]> {
    return this.skillDataObservable;
  }

  getTeamMateData(id: string): Observable<TeamMate> {
    return this.teamMatesData.pipe(map(teamMates => teamMates[id]));
  }
}
