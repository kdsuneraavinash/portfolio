import { Component, OnInit } from '@angular/core'
import { NavButton } from '../data/nav-button'
import { DataService } from '../data.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public navButtons!: NavButton[]
  public isNavbarCollapsed: boolean = true;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getNavigationData().subscribe((v) => (this.navButtons = v))
  }

  getTitle() {
    if (this.router.url.length < 2) {
      return ''
    } else {
      return this.router.url[1].toUpperCase() + this.router.url.slice(2)
    }
  }

  toggleNavbarCollapsing() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  collapseNavbar() {
    this.isNavbarCollapsed = true;
  }
}
