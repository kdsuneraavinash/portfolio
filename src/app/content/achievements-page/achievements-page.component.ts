import { Component, OnInit } from '@angular/core';
import { AchievementsCardData } from 'src/app/achievements-card-data';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-achievements-page',
  templateUrl: './achievements-page.component.html',
  styleUrls: ['./achievements-page.component.scss']
})
export class AchievementsPageComponent implements OnInit {
  cards: AchievementsCardData[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAchievementsData().subscribe((v) => this.cards = v);
  }
}
