import { Component, OnInit, Input } from '@angular/core';
import { TeamMate } from '../../data/team-mate';

@Component({
  selector: 'app-team-mate',
  templateUrl: './team-mate.component.html',
  styleUrls: ['./team-mate.component.scss']
})
export class TeamMateComponent implements OnInit {
  @Input('data') data: TeamMate;

  constructor() { }

  ngOnInit() {
  }

}
