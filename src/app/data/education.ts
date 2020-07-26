export class Education {
    static URL = 'http://localhost:8000/education.json';

    constructor(public title: string, public location: string,
        public period: string, public content: string,
        public image: string, public index: number) {
    }

    static compare(a: Education, b: Education): number {
        return a.index - b.index;
    }
}
