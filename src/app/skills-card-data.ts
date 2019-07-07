export class SkillsCardData {

    constructor(public imageUrl: string, public link: string, public progress: number, public title: string) { }
}

export class SkillsCardGroup {

    constructor(public title: string, public skills: SkillsCardData[]) { }
}