import { Component, OnInit } from '@angular/core';
import { SkillsCardGroup } from 'src/app/skills-card-data';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {
  cardGroups: SkillsCardGroup[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSkillsData().subscribe((v) => this.cardGroups = v);
  }

}
