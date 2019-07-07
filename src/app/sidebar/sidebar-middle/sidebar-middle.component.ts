import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar-middle',
    templateUrl: './sidebar-middle.component.html',
    styleUrls: ['./sidebar-middle.component.scss']
})
export class SidebarMiddleComponent implements OnInit {
    navButtons: NavButton[] = [
        new NavButton("About Me", "user", '/about'),
        new NavButton("Skills", "crown", '/skills'),
        new NavButton("Education", "graduation-cap", '/education'),
        new NavButton("Achievements", "trophy", '/achievements'),
        new NavButton("Projects", "project-diagram", '/projects')
    ];

    currentNavButton: NavButton = this.navButtons[0];

    constructor() { }

    ngOnInit() {
    }
}

class NavButton {
    constructor(public text: string, public iconName: string = "user", public link: string = '/') { }
}