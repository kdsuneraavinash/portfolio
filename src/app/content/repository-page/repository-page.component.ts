import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/data/repository';
import { DataService } from 'src/app/data.service';

@Component({
    selector: 'app-repository-page',
    templateUrl: './repository-page.component.html',
    styleUrls: ['./repository-page.component.scss']
})
export class RepositoryPageComponent implements OnInit {
    cards: Repository[];

    constructor(private dataService: DataService) {
        this.cards = [];
    }

    ngOnInit() {
        this.dataService.getRepositoriesData().subscribe((v) => this.cards = v);
    }

}
