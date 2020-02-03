export class Skill {
    constructor(public image: string, public link: string, public progress: number,
        public title: string, public group: string) {
    }
}

export class SkillGroup {
    constructor(public title: string, public skills: Skill[]) {
    }
}
