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
    new FooterIcon("google", "Email", "mailto:kdsuneraavinash@gmail.com"),
    new FooterIcon("linkedin", "LinkedIn", "https://www.linkedin.com/in/kdsuneraavinash"),
    new FooterIcon("github", "GitHub", "https://github.com/kdsuneraavinash"),
    new FooterIcon("hackerrank", "Hackerrank", "https://www.hackerrank.com/kdsuneraavinash"),
  ];

  currentNavButton: NavButton = this.navButtons[0];

  constructor() { }

  ngOnInit() {
  }
}

class FooterIcon {
  constructor(public iconName: string, public tooltip: string = "", public linkAddress: string = "") {
  }
}

class NavButton {
  constructor(public text: string, public iconName: string = "user", ) { }
}