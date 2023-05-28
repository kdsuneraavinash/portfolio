import { Component, Input } from '@angular/core'
import { ContentType } from 'src/app/data/content-type'

@Component({
  selector: 'app-common-content',
  templateUrl: './common-content.component.html',
  styleUrls: ['./common-content.component.scss'],
})
export class CommonContentComponent {
  @Input('content') content: ContentType = ''

  constructor() {}

  isString(content: any): boolean {
    return typeof content === 'string'
  }

  isArray(content: any): boolean {
    return Array.isArray(content)
  }

  topLevelArray(content: any): (string | string[])[] {
    return content as (string | string[])[]
  }

  lowLevelArray(content: any): string[] {
    return content as string[]
  }
}
