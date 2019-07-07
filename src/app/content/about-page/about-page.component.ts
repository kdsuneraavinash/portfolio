import { Component, OnInit } from '@angular/core';
import { ProfileData } from 'src/app/profile-data';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  public data: ProfileData;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProfileData().subscribe((v) => this.data = v);
  }
}
