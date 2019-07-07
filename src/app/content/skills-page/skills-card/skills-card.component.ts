import { Component, OnInit, Input } from '@angular/core';
import { SkillsCardData } from 'src/app/skills-card-data';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.scss']
})
export class SkillsCardComponent implements OnInit {
  @Input('data') data: SkillsCardData;

  constructor() { }

  ngOnInit() {
  }

}
