import { AbstractBook } from "./AbstractBook";

export class Copy {
  private book: AbstractBook;
  private isAvailable: boolean = true;

  constructor(book: AbstractBook) {
    this.book = book;
  }

  getBook(): AbstractBook {
    return this.book;
  }

  isCopyAvailable(): boolean {
    return this.isAvailable;
  }

  borrow(): void {
    this.isAvailable = false;
  }

  return(): void {
    this.isAvailable = true;
  }
}