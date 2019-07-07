import { TeamMate } from './team-mates';

export class ProjectsCardData {
    constructor(public title: string, public content: string, public team?: TeamMate[]) { }
}