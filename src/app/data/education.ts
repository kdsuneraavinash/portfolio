export class Education {
    static URL = 'https://raw.githubusercontent.com/kdsuneraavinash/portfolio/master/json/education.json';

    constructor(public title: string, public location: string,
        public period: string, public content: string,
        public image: string, public index: number) {
    }

    static compare(a: Education, b: Education): number {
        return a.index - b.index;
    }
}
