import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar-bottom',
    templateUrl: './sidebar-bottom.component.html',
    styleUrls: ['./sidebar-bottom.component.scss']
})
export class SidebarBottomComponent implements OnInit {
    footerIcons: FooterIcon[] = [
        new FooterIcon("google", "Email", "mailto:kdsuneraavinash@gmail.com"),
        new FooterIcon("linkedin", "LinkedIn", "https://www.linkedin.com/in/kdsuneraavinash"),
        new FooterIcon("github", "GitHub", "https://github.com/kdsuneraavinash"),
        new FooterIcon("hackerrank", "Hackerrank", "https://www.hackerrank.com/kdsuneraavinash"),
    ];

    constructor() { }

    ngOnInit() {
    }
}

class FooterIcon {
    constructor(public iconName: string, public tooltip: string = "", public linkAddress: string = "") {
    }
}