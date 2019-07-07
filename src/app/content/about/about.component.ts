import { Component, OnInit } from '@angular/core';
import { ProfileData } from 'src/app/profile-data';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public data: ProfileData;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProfileData().subscribe((v) => this.data = v);
  }
}
