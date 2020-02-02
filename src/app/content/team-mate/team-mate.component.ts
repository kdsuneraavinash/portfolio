import { Component, OnInit, Input } from '@angular/core';
import { TeamMate } from '../../data/team-mate';
import { DataService } from 'src/app/data.service';

@Component({
    selector: 'app-team-mate',
    templateUrl: './team-mate.component.html',
    styleUrls: ['./team-mate.component.scss']
})
export class TeamMateComponent implements OnInit {
    @Input('data') data: string;
    teamMate: TeamMate;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getTeamMateData(this.data).subscribe((v) => this.teamMate = v);
    }

}
