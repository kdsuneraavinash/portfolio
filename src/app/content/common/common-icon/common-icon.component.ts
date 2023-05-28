import { Component, Input } from '@angular/core'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { IconPrefix, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { IconName, faGithub, faGoogle, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faAward,
  faBriefcase,
  faCalendar,
  faCity,
  faCrown,
  faGraduationCap,
  faHomeUser,
  faLaptopCode,
  faProjectDiagram,
  faSitemap,
  faTrophy,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-common-icon',
  templateUrl: './common-icon.component.html',
  styleUrls: ['./common-icon.component.scss'],
})
export class CommonIconComponent {
  @Input('type') iconType: IconPrefix = 'fas'
  @Input('icon') iconName: IconName = 'times'
  @Input('size') iconSize: SizeProp = 'xl'

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faUser,
      faGraduationCap,
      faCrown,
      faTrophy,
      faProjectDiagram,
      faGoogle,
      faLinkedin,
      faGithub,
      faHackerrank,
      faCity,
      faCalendar,
      faLaptopCode,
      faSitemap,
      faAward,
      faBriefcase,
    )
  }
}
