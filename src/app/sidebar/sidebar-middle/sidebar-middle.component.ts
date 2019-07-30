import {Component, OnInit} from '@angular/core';
import {DataService} from 'src/app/data.service';
import {NavButton} from 'src/app/data/nav-button';

@Component({
  selector: 'app-sidebar-middle',
  templateUrl: './sidebar-middle.component.html',
  styleUrls: ['./sidebar-middle.component.scss']
})
export class SidebarMiddleComponent implements OnInit {
  public navButtons: NavButton[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getNavigationData().subscribe((v) => this.navButtons = v);
  }
}
