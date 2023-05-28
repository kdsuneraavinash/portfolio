import { ContentType } from './content-type'

export class Education {
  constructor(
    public title: string,
    public location: string,
    public period: string,
    public content: ContentType,
    public image: string,
    public index: number,
  ) {}

  static compare(a: Education, b: Education): number {
    return a.index - b.index
  }
}
