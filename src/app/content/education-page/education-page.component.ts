import { Component, OnInit } from '@angular/core';
import { EducationCardData } from '../../education-card-data';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss']
})
export class EducationPageComponent implements OnInit {
  cards: EducationCardData[] = [
    {
      title: "UNDERGRADUATE, BACHELOR OF SCIENCE", location: "University of Moratuwa", period: "2017 - Current",
      content: [
        "Undergraduate, Bachelor of Science, Computer Science and Engineering, University of Moratuwa.",
        "Current SGPA: 4.11"
      ]
    },
    {
      title: "GCE ADVANCED LEVEL EXAMINATION", location: "Kalutara Vidyalaya - National School", period: "2003 - 2016",
      content: [
        "All A Passes in Physical Sciences Stream",
        "Island rank 76th, District Rank 2nd, Z Score 2.680"
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
