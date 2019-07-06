import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar-top',
    templateUrl: './sidebar-top.component.html',
    styleUrls: ['./sidebar-top.component.scss']
})
export class SidebarTopComponent implements OnInit {
    name: string = "Sunera Avinash";
    subtitle: string = "Computer Science Student";

    constructor() { }

    ngOnInit() {
    }
}
