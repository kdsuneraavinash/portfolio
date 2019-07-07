import { Component, OnInit, Input } from '@angular/core';
import { AchievementsCardData } from 'src/app/achievements-card-data';

@Component({
  selector: 'app-achievements-card',
  templateUrl: './achievements-card.component.html',
  styleUrls: ['./achievements-card.component.scss']
})
export class AchievementsCardComponent implements OnInit {
  @Input('data') data: AchievementsCardData;

  constructor() { }

  ngOnInit() {
  }

}
