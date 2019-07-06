import { Component, OnInit } from '@angular/core';
import { EducationCardData } from '../../education-card-data';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss']
})
export class EducationPageComponent implements OnInit {
  cards: EducationCardData[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEducationData().subscribe((v) => this.cards = v);
  }

}
