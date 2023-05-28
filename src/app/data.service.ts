import { Injectable } from '@angular/core'
import { Observable, of, BehaviorSubject } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Project } from './data/project'
import { Education } from './data/education'
import { Achievement } from './data/achievement'
import { Skill } from './data/skill'
import { Profile } from './data/profile'
import { NavButton } from './data/nav-button'
import { TeamMate } from './data/team-mate'
import { environment } from 'src/environments/environment'
import * as settings from './json/settings.json'
import { Experience } from './data/experience'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly navButtonData: NavButton[]
  private readonly teamMatesData: BehaviorSubject<Map<string, TeamMate>>
  private readonly profileDataObservable: BehaviorSubject<Profile>
  private readonly educationDataObservable: BehaviorSubject<Education[]>
  private readonly experienceDataObservable: BehaviorSubject<Experience[]>
  private readonly projectDataObservable: BehaviorSubject<Project[]>
  private readonly achievementDataObservable: BehaviorSubject<Achievement[]>
  private readonly skillDataObservable: BehaviorSubject<Skill[]>

  constructor(private http: HttpClient) {
    const bust = (url: string) => `${environment.data}/${url}?_cache_buster=${new Date().getTime()}`

    this.navButtonData = NavButton.data
    this.teamMatesData = new BehaviorSubject(new Map<string, TeamMate>())
    this.profileDataObservable = new BehaviorSubject(settings as Profile)
    this.educationDataObservable = new BehaviorSubject(<Education[]>[])
    this.experienceDataObservable = new BehaviorSubject(<Experience[]>[])
    this.projectDataObservable = new BehaviorSubject(<Project[]>[])
    this.achievementDataObservable = new BehaviorSubject(<Achievement[]>[])
    this.skillDataObservable = new BehaviorSubject(<Skill[]>[])
    this.http.get(bust('teammates.json')).subscribe((v) => this.teamMatesData.next(v as Map<string, TeamMate>))
    this.http
      .get(bust('skills.json'))
      .subscribe((v) => this.skillDataObservable.next((v as Skill[]).sort(Skill.compare)))
    this.http
      .get(bust('education.json'))
      .subscribe((v) => this.educationDataObservable.next((v as Education[]).sort(Education.compare)))
    this.http
      .get(bust('experience.json'))
      .subscribe((v) => this.experienceDataObservable.next((v as Experience[]).sort(Experience.compare)))
    this.http.get(bust('settings.json')).subscribe((v) => this.profileDataObservable.next(v as Profile))
    this.http
      .get(bust('achievements.json'))
      .subscribe((v) => this.achievementDataObservable.next((v as Achievement[]).sort(Achievement.compare)))
    this.http
      .get(bust('projects.json'))
      .subscribe((v) => this.projectDataObservable.next((v as Project[]).sort(Project.compare)))
  }

  getNavigationData(): Observable<NavButton[]> {
    return of(this.navButtonData)
  }

  getProfileData(): Observable<Profile> {
    return this.profileDataObservable
  }

  getEducationData(): Observable<Education[]> {
    return this.educationDataObservable
  }

  getExperienceData(): Observable<Experience[]> {
    return this.experienceDataObservable
  }

  getProjectsData(): Observable<Project[]> {
    return this.projectDataObservable
  }

  getAchievementsData(): Observable<Achievement[]> {
    return this.achievementDataObservable
  }

  getSkillData(): Observable<Skill[]> {
    return this.skillDataObservable
  }

  getTeamMateData(id: string): Observable<TeamMate> {
    return this.teamMatesData.pipe(map((teamMates: any) => teamMates[id] as TeamMate))
  }
}
