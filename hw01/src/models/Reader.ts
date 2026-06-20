import { Copy } from "./Copy";

export class Reader {
  private id: string;
  private name: string;
  private borrowed: Copy[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  getId(): string {
    return this.id;
  }

  borrow(copy: Copy): void {
    this.borrowed.push(copy);
  }

  return(copy: Copy): void {
    this.borrowed = this.borrowed.filter(c => c !== copy);
  }

  getBorrowed(): Copy[] {
    return this.borrowed;
  }
}