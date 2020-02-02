import { Component, OnInit } from '@angular/core';
import { SkillGroup, Skill } from 'src/app/data/skill';
import { DataService } from 'src/app/data.service';

@Component({
    selector: 'app-skills-page',
    templateUrl: './skills-page.component.html',
    styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {
    cardGroups: SkillGroup[];

    constructor(private dataService: DataService) {
        this.cardGroups = [];
    }

    ngOnInit() {
        this.dataService.getSkillsData().subscribe((v) => {
            this.cardGroups = [];
            for (const groupName of ['Languages', 'Frameworks', 'Database and Tooling']) {
                const skills: Skill[] = v.filter((p) => p.group === groupName);
                this.cardGroups.push(new SkillGroup(groupName, skills));
            }
        });
    }
}
