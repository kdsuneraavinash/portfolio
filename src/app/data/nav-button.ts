export class NavButton {
    constructor(public text: string, public iconName: string = "user", public link: string = '/') {
    }

    public static readonly data: NavButton[] = [
        { text: "About Me", iconName: "user", link: '/about' },
        { text: "Skills", iconName: "crown", link: '/skills' },
        { text: "Education", iconName: "graduation-cap", link: '/education' },
        { text: "Achievements", iconName: "trophy", link: '/achievements' },
        { text: "Projects", iconName: "project-diagram", link: '/projects' },
        { text: "Repositories", iconName: "code-branch", link: '/repositories' }
    ];
}
