import { AbstractBook } from "./AbstractBook";

export class EBook extends AbstractBook {
  private url: string;

  constructor(title: string, year: number, author: any, url: string) {
    super(title, year, author);
    this.url = url;
  }

  getDescription(): string {
    return `E-book "${this.title}" by ${this.author.getName()} (${this.year}) - ${this.url}`;
  }
}