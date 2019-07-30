import {Component, OnInit, Input} from '@angular/core';
import {Project} from 'src/app/data/project';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss']
})
export class ProjectsCardComponent implements OnInit {
  @Input('data') data: Project;

  constructor() {
  }

  ngOnInit() {
  }

}
