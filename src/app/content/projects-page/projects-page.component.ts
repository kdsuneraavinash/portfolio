import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/data/project';
import { DataService } from 'src/app/data.service';

@Component({
    selector: 'app-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
    cards: Project[];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getProjectsData().subscribe((v) => this.cards = v);
    }

}
