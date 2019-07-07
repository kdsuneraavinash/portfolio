import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ProfileData } from 'src/app/profile-data';

@Component({
    selector: 'app-sidebar-bottom',
    templateUrl: './sidebar-bottom.component.html',
    styleUrls: ['./sidebar-bottom.component.scss']
})
export class SidebarBottomComponent implements OnInit {
    footerIcons: FooterIcon[];

    setFooterIcons(data: ProfileData) {
        this.footerIcons = [
            new FooterIcon("google", "Email", "mailto:" + data.email),
            new FooterIcon("linkedin", "LinkedIn", data.linkedin),
            new FooterIcon("github", "GitHub", data.github),
            new FooterIcon("hackerrank", "Hackerrank", data.hackerrank),
        ];
    }

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getProfileData().subscribe((v) => this.setFooterIcons(v));
    }
}

class FooterIcon {
    constructor(public iconName: string, public tooltip: string, public linkAddress: string) {
    }
}