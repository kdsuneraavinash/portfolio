import { Component, OnInit, Input } from '@angular/core';
import { EducationCardData } from 'src/app/education-card-data';

@Component({
  selector: 'app-details-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCard implements OnInit {
  @Input('data') data: EducationCardData;

  constructor() { }

  ngOnInit() {
  }

}
