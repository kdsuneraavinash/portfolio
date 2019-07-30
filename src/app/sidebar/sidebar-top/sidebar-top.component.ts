import {Component, OnInit} from '@angular/core';
import {DataService} from 'src/app/data.service';
import {Profile} from 'src/app/data/profile';

@Component({
  selector: 'app-sidebar-top',
  templateUrl: './sidebar-top.component.html',
  styleUrls: ['./sidebar-top.component.scss']
})
export class SidebarTopComponent implements OnInit {
  name: string;
  subtitle: string;

  setData(data: Profile) {
    this.name = data.name;
    this.subtitle = data.subtitle;
  }

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getProfileData().subscribe((v) => this.setData(v));
  }

}
