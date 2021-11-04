export class Word {
  constructor(
    public id: number,
    public category: string,
    public title: string,
    public point: number,
    public tips: Array<string>,
    public especial?: boolean
  ) { }
}