import {Component, OnInit} from '@angular/core';
import {SkillGroup} from 'src/app/data/skill';
import {DataService} from 'src/app/data.service';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {
  cardGroups: SkillGroup[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getSkillsData().subscribe((v) => this.cardGroups = v);
  }

}
