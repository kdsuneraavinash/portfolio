import { Component, OnInit } from '@angular/core';
import { Education } from '../../data/education';
import { DataService } from 'src/app/data.service';

@Component({
    selector: 'app-education-page',
    templateUrl: './education-page.component.html',
    styleUrls: ['./education-page.component.scss']
})
export class EducationPageComponent implements OnInit {
    cards: Education[];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getEducationData().subscribe((v) => this.cards = v);
    }

}
