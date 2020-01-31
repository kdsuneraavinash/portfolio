import { Component, OnInit, Input } from '@angular/core';
import { Education } from 'src/app/data/education';

@Component({
    selector: 'app-education-card',
    templateUrl: './education-card.component.html',
    styleUrls: ['./education-card.component.scss']
})
export class EducationCard implements OnInit {
    @Input('data') data: Education;

    constructor() {
    }

    ngOnInit() {
    }

}
