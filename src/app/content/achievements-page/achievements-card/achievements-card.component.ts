import { Component, OnInit, Input } from '@angular/core';
import { Achievement } from 'src/app/data/achievement';

@Component({
  selector: 'app-achievements-card',
  templateUrl: './achievements-card.component.html',
  styleUrls: ['./achievements-card.component.scss']
})
export class AchievementsCardComponent implements OnInit {
  @Input('data') data: Achievement;
  @Input('isLast') isLast: boolean;

  constructor() { }

  ngOnInit() {
  }

}
