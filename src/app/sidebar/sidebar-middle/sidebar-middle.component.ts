import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar-middle',
    templateUrl: './sidebar-middle.component.html',
    styleUrls: ['./sidebar-middle.component.scss']
})
export class SidebarMiddleComponent implements OnInit {
    navButtons: NavButton[] = [
        new NavButton("About Me", "user"),
        new NavButton("Skills", "crown"),
        new NavButton("Education", "graduation-cap"),
        new NavButton("Acheievements", "trophy"),
        new NavButton("Projects", "project-diagram")
    ];

    currentNavButton: NavButton = this.navButtons[0];

    constructor() { }

    ngOnInit() {
    }
}

class NavButton {
    constructor(public text: string, public iconName: string = "user", ) { }
}