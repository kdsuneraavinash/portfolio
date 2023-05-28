import {Component, Input, OnInit} from '@angular/core'
import {Education} from 'src/app/data/education'
import {ContentType} from "../../../data/content-type";
import {IconName} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.scss'],
})
export class CommonCardComponent implements OnInit {
  @Input('title') title: string = ''
  @Input('subtitle1') subtitle1: string = ''
  @Input('subtitle2') subtitle2: string = ''
  @Input('subtitle1-icon') subtitle1Icon: IconName = 'text'
  @Input('subtitle2-icon') subtitle2Icon: IconName = 'text'
  @Input('content') content!: ContentType;
  @Input('image') image?: string;

  constructor() {
  }

  ngOnInit() {
  }
}
