import { Injectable } from '@angular/core';
import { Project } from './data/project';
import { Education } from './data/education';
import { Observable, of, throwError } from 'rxjs';
import { Achievement } from './data/achievement';
import { SkillGroup } from './data/skill';
import { Profile } from './data/profile';
import { NavButton } from './data/nav-button';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private readonly profileData: Profile;
    private readonly navButtonData: NavButton[];
    private readonly projectsData: Project[];
    private readonly skillsData: SkillGroup[];
    private readonly achievementsData: Achievement[];

    constructor(private afs: AngularFirestore) {
        this.profileData = new Profile();
        this.navButtonData = NavButton.data;
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
        return this.afs.collection('education').valueChanges() as Observable<Education[]>;
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
