import { Component, OnInit } from '@angular/core'
import { Experience } from '../../data/experience'
import { DataService } from 'src/app/data.service'

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss'],
})
export class ExperiencePageComponent implements OnInit {
  cards: Experience[]

  constructor(private dataService: DataService) {
    this.cards = []
  }

  ngOnInit() {
    this.dataService.getExperienceData().subscribe((v) => (this.cards = v))
  }
}
