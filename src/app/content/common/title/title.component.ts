import { Component, OnInit, Input } from '@angular/core'
import { IconName } from '@fortawesome/fontawesome-svg-core'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input('title') title: string = ''
  @Input('icon') icon: IconName = 'text'

  constructor() {}

  ngOnInit() {}
}
