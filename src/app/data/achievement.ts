export class Achievement {
    constructor(public title: string, public organizers: string, public type: string,
        public color: string, public content: string, public team?: string[]) {
    }
}
