import {Component, OnInit} from '@angular/core';
import {Achievement} from 'src/app/data/achievement';
import {DataService} from 'src/app/data.service';

@Component({
  selector: 'app-achievements-page',
  templateUrl: './achievements-page.component.html',
  styleUrls: ['./achievements-page.component.scss']
})
export class AchievementsPageComponent implements OnInit {
  cards: Achievement[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getAchievementsData().subscribe((v) => this.cards = v);
  }
}
