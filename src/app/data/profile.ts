export class Profile {
    public readonly name: string;
    public readonly address: string;
    public readonly telephone: string;
    public readonly bio: string;

    public readonly email: string;
    public readonly github: string;
    public readonly linkedIn: string;
    public readonly hackerRank: string;

    public readonly subtitle: string;

    constructor() {
        this.name = "Sunera Avinash";
        this.address = "344/1, Moonamalgahawatta, Duwa-Temple Rd, Kalutara South.";
        this.telephone = "(076) 833 6850";
        this.bio = "I am a skilled computer science student who has a passion for algorithms and problem solving.";

        this.email = "kdsuneraavinash@gmail.com";
        this.github = "https://github.com/kdsuneraavinash";
        this.linkedIn = "https://www.linkedin.com/in/kdsuneraavinash";
        this.hackerRank = "https://www.hackerrank.com/kdsuneraavinash";

        this.subtitle = "Computer Science Student";
    }
}
