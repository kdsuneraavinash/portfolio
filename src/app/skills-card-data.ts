export class SkillsCardData {

    constructor(public imageUrl: string, public link: string) { }
}

export class SkillsCardGroup {

    constructor(public title: string, public skills: SkillsCardData[]) { }
}