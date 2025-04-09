export class Partida {
  constructor(
    public timeA: string,
    public timeB: string,
    public golsA: number,
    public golsB: number
  ) {}

  resultado(): string {
    return `${this.timeA} ${this.golsA} x ${this.golsB} ${this.timeB}`;
  }
}
