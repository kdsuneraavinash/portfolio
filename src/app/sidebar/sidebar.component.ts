import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navButtons: NavButton[] = [
    new NavButton("ABOUT ME"),
    new NavButton("SKILLS"),
    new NavButton("EDUCATION"),
    new NavButton("ACHIEVEMTNS"),
    new NavButton("PROJECTS")
  ];
  footerIcons: FooterIcon[] = [
    new FooterIcon("google", "mailto:kdsuneraavinash@gmail.com"),
    new FooterIcon("linkedin", "https://www.linkedin.com/in/kdsuneraavinash"),
    new FooterIcon("github", "https://github.com/kdsuneraavinash"),
    new FooterIcon("hackerrank", "https://www.hackerrank.com/kdsuneraavinash"),
  ];

  currentNavButton: NavButton = this.navButtons[0];

  constructor() { }

  ngOnInit() {
  }
}

class FooterIcon {
  constructor(public iconName: string, public linkAddress: string = "") { }
}

class NavButton {
  constructor(public text: string) { }
}