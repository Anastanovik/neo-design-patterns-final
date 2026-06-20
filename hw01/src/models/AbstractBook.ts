import { Author } from "./Author";

export abstract class AbstractBook {
  protected title: string;
  protected year: number;
  protected author: Author;

  constructor(title: string, year: number, author: Author) {
    this.title = title;
    this.year = year;
    this.author = author;

    this.author.addBook(this);
  }

  abstract getDescription(): string;

  getAuthor(): Author {
    return this.author;
  }

  getTitle(): string {
    return this.title;
  }
}