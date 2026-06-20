// TODO: реалізуйте клас або інтерфейс тут
export class DocumentBuilder {
  private header: string = "";
  private body: string = "";
  private footer: string = "";

  addHeader(text: string): DocumentBuilder {
    this.header = text;
    return this;
  }

  addBody(text: string): DocumentBuilder {
    this.body = text;
    return this;
  }

  addFooter(text: string): DocumentBuilder {
    this.footer = text;
    return this;
  }

  build(): string {
    return `=== ${this.header} ===\n\n${this.body}\n\n${this.footer}`;
  }
}