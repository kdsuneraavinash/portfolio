class Link {
    constructor(public title: string, public target: string) {
    }
}

export class Project {
    static URL = 'https://raw.githubusercontent.com/kdsuneraavinash/portfolio/master/json/projects.json';

    constructor(public title: string, public content: string, public index: number,
        public badges: string[] = [], public links: Link[] = [], public team?: string[],
        public image?: string, public embed?: string) {
    }

    static compare(a: Project, b: Project): number {
        return b.index - a.index;
    }
}
