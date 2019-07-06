import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  name: string = "Sunera Avinash";
  subtitle: string = "Computer Science Student";

  navButtons: NavButton[] = [
    new NavButton("About Me", "user"),
    new NavButton("Skills", "crown"),
    new NavButton("Education", "graduation-cap"),
    new NavButton("Acheievements", "trophy"),
    new NavButton("Projects", "project-diagram")
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
  constructor(public text: string, public iconName: string = "user", ) { }
}