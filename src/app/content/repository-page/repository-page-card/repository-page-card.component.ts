import { Component, OnInit, Input } from '@angular/core';
import { Repository } from 'src/app/data/repository';

@Component({
    selector: 'app-repository-page-card',
    templateUrl: './repository-page-card.component.html',
    styleUrls: ['./repository-page-card.component.scss']
})
export class RepositoryPageCardComponent implements OnInit {
    @Input('data') data: Repository;

    constructor() { }

    ngOnInit() {
    }

}
