import { Component, OnInit, Input } from '@angular/core';
import { TeamMate } from '../../team-mates';

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
