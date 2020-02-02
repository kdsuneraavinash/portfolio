import { Injectable } from '@angular/core';
import { Project } from './data/project';
import { Education } from './data/education';
import { Observable, of, throwError } from 'rxjs';
import { Achievement } from './data/achievement';
import { Skill } from './data/skill';
import { Profile } from './data/profile';
import { NavButton } from './data/nav-button';
import { AngularFirestore } from '@angular/fire/firestore';
import { TeamMate } from './data/team-mate';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private readonly profileData: Profile;
    private readonly navButtonData: NavButton[];
    private readonly projectsData: Project[];
    private readonly achievementsData: Achievement[];
    private readonly teamMatesData: Map<string, Observable<TeamMate>>;

    constructor(private afs: AngularFirestore) {
        this.profileData = new Profile();
        this.navButtonData = NavButton.data;
        this.projectsData = Project.data;
        this.achievementsData = Achievement.data;
        this.teamMatesData = new Map();
    }

    getNavigationData(): Observable<NavButton[]> {
        return of(this.navButtonData);
    }

    getProfileData(): Observable<Profile> {
        return of(this.profileData);
    }

    getEducationData(): Observable<Education[]> {
        return this.afs.collection<Education>('education', ref => ref.orderBy('index')).valueChanges();
    }

    getProjectsData(): Observable<Project[]> {
        return of(this.projectsData);
    }

    getAchievementsData(): Observable<Achievement[]> {
        return of(this.achievementsData);
    }

    getSkillsData(): Observable<Skill[]> {
        return this.afs.collection<Skill>('skills', ref => ref.orderBy('progress', 'desc')).valueChanges();
    }

    getTeamMateData(id: string): Observable<TeamMate> {
        if (!this.teamMatesData.has(id)) {
            this.teamMatesData[id] = this.afs.collection('teammates').doc<TeamMate>(id).valueChanges();
        }
        return this.teamMatesData[id];
    }
}
