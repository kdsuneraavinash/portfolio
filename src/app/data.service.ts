import { Injectable } from '@angular/core';
import { Project } from './data/project';
import { Education } from './data/education';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Achievement } from './data/achievement';
import { Skill } from './data/skill';
import { Profile } from './data/profile';
import { NavButton } from './data/nav-button';
import { AngularFirestore } from '@angular/fire/firestore';
import { TeamMate } from './data/team-mate';
import { Repository } from './data/repository';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private readonly navButtonData: NavButton[];
    private readonly teamMatesData: Map<string, Observable<TeamMate>>;
    private readonly profileDataObservable: BehaviorSubject<Profile>;
    private readonly repositoryDataObservable: BehaviorSubject<Repository[]>;

    constructor(private afs: AngularFirestore, private http: HttpClient) {
        this.navButtonData = NavButton.data;
        this.teamMatesData = new Map();
        this.profileDataObservable = new BehaviorSubject(new Profile());
        this.repositoryDataObservable = new BehaviorSubject([]);
        this.afs
            .collection('settings')
            .doc<Profile>('profile')
            .valueChanges().subscribe((v) => this.profileDataObservable.next(v));
        this.http
            .get('https://api.github.com/users/kdsuneraavinash/repos?sort=updated')
            .subscribe((v) => this.repositoryDataObservable.next(v as Repository[]));
    }

    getNavigationData(): Observable<NavButton[]> {
        return of(this.navButtonData);
    }

    getProfileData(): Observable<Profile> {
        return this.profileDataObservable;
    }

    getEducationData(): Observable<Education[]> {
        return this.afs
            .collection<Education>('education', ref => ref.orderBy('index'))
            .valueChanges();
    }

    getProjectsData(): Observable<Project[]> {
        return this.afs
            .collection<Achievement>('projects', ref => ref.orderBy('index', 'desc'))
            .valueChanges();
    }

    getAchievementsData(): Observable<Achievement[]> {
        return this.afs
            .collection<Achievement>('achievements', ref => ref.orderBy('index', 'desc'))
            .valueChanges();
    }

    getSkillData(): Observable<Skill[]> {
        return this.afs
            .collection<Skill>('skills', ref => ref.orderBy('progress', 'desc'))
            .valueChanges();
    }

    getTeamMateData(id: string): Observable<TeamMate> {
        if (!this.teamMatesData.has(id)) {
            this.teamMatesData[id] = this.afs
                .collection('teammates')
                .doc<TeamMate>(id)
                .valueChanges();
        }
        return this.teamMatesData[id];
    }

    getRepositoriesData(): Observable<Repository[]> {
        return this.repositoryDataObservable;
    }
}
