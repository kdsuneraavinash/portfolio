import { Component, OnInit, Input } from '@angular/core';
import { ProjectsCardData } from 'src/app/projects-card-data';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss']
})
export class ProjectsCardComponent implements OnInit {
  @Input('data') data: ProjectsCardData;

  constructor() { }

  ngOnInit() {
  }

}
