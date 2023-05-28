import { Component, OnInit, Input } from '@angular/core'
import {ContentType} from "../../../data/content-type";
import {IconName} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-common-linked-card',
  templateUrl: './common-linked-card.component.html',
  styleUrls: ['./common-linked-card.component.scss'],
})
export class CommonLinkedCardComponent implements OnInit {
  @Input('title') title: string = ''
  @Input('subtitle1') subtitle1: string = ''
  @Input('subtitle2') subtitle2: string = ''
  @Input('subtitle1-icon') subtitle1Icon: IconName = 'text'
  @Input('subtitle2-icon') subtitle2Icon: IconName = 'text'
  @Input('content') content!: ContentType;
  @Input('image') image?: string;
  @Input('link-color') avatarColor: string = 'gold';
  @Input('link-icon') avatarIcon: IconName = 'award';
  @Input('team') team?: string[];
  @Input('isLast') isLast!: boolean

  constructor() {}

  ngOnInit() {}
}
