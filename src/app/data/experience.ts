import { ContentType } from './content-type'

export class Experience {
  constructor(
    public title: string,
    public location: string,
    public period: string,
    public content: ContentType,
    public image: string,
    public index: number,
  ) {}

  static compare(a: Experience, b: Experience): number {
    return a.index - b.index
  }
}
