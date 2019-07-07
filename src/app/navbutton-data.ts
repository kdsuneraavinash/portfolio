export class NavButton {
    constructor(public text: string, public iconName: string = "user", public link: string = '/') { }

    private static navButtons: NavButton[] = [
        new NavButton("About Me", "user", '/about'),
        new NavButton("Skills", "crown", '/skills'),
        new NavButton("Education", "graduation-cap", '/education'),
        new NavButton("Achievements", "trophy", '/achievements'),
        new NavButton("Projects", "project-diagram", '/projects')
    ];

    static getData() {
        return NavButton.navButtons;
    }
}