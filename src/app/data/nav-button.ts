import { IconName } from '@fortawesome/fontawesome-svg-core'

export class NavButton {
  constructor(public text: string, public iconName: IconName = 'user', public link: string = '/') {}

  public static readonly data: NavButton[] = [
    { text: 'About Me', iconName: 'user', link: '/about' },
    { text: 'Education', iconName: 'graduation-cap', link: '/education' },
    { text: 'Experience', iconName: 'briefcase', link: '/experience' },
    { text: 'Achievements', iconName: 'trophy', link: '/achievements' },
    { text: 'Projects', iconName: 'project-diagram', link: '/projects' },
    // { text: 'Skills', iconName: 'crown', link: '/skills' },
  ]
}
