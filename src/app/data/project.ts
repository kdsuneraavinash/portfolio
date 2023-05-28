export class Project {
  constructor(
    public title: string,
    public content: string,
    public index: number,
    public role: string = "",
    public technologies: string = "",
    public image?: string,
    public embed?: string,
  ) {}

  static compare(a: Project, b: Project): number {
    return b.index - a.index
  }
}
