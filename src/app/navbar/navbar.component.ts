import { Component, OnInit } from '@angular/core';
import { NavButton } from '../navbutton-data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navButtons: NavButton[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getNavigationData().subscribe((v) => this.navButtons = v);
  }
}
