import {Component, OnInit, Input} from '@angular/core';
import {Skill} from 'src/app/data/skill';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.scss']
})
export class SkillsCardComponent implements OnInit {
  @Input('data') data: Skill;

  constructor() {
  }

  ngOnInit() {
  }

}
