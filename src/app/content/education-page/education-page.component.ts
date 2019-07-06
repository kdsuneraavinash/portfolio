import { Component, OnInit } from '@angular/core';
import { EducationCardData } from '../../education-card-data';
import { educationData } from 'src/app/education-data';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss']
})
export class EducationPageComponent implements OnInit {
  cards: EducationCardData[] = educationData;

  constructor() { }

  ngOnInit() {
  }

}
