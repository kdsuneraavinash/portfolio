class Link {
    constructor(public title: string, public target: string) {
    }
}

export class Achievement {
    constructor(public title: string, public organizers: string, public type: string,
        public color: string, public content: string, public index: number,
        public team?: string[], public image?: string, public links: Link[] = []) {
    }

    static compare(a: Achievement, b: Achievement): number {
        return b.index - a.index;
    }
}