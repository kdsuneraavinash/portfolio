import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ProfileData } from 'src/app/profile-data';

@Component({
    selector: 'app-sidebar-top',
    templateUrl: './sidebar-top.component.html',
    styleUrls: ['./sidebar-top.component.scss']
})
export class SidebarTopComponent implements OnInit {
    name: string;
    subtitle: string;

    setData(data: ProfileData) {
        this.name = data.name;
        this.subtitle = data.subtitle;
    }

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getProfileData().subscribe((v) => this.setData(v));
    }

}
