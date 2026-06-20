import { AbstractBook } from "./AbstractBook";

export class Book extends AbstractBook {
  getDescription(): string {
    return `Physical book "${this.title}" by ${this.author.getName()} (${this.year})`;
  }
}