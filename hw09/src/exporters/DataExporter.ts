import * as fs from "fs";
import * as path from "path";
import { UserData } from "../data/UserData";

type ApiUser = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export abstract class DataExporter {
  protected data: UserData[] = [];
  protected result = "";

  async export(): Promise<void> {
    await this.load();
    this.transform();
    this.beforeRender();
    this.render();
    this.afterRender();
    this.save();
  }

  protected async load(): Promise<void> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = (await response.json()) as ApiUser[];

    this.data = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    }));
  }

  protected transform(): void {
    this.data = this.data.sort((a, b) => a.name.localeCompare(b.name));
  }

  protected beforeRender(): void {}

  protected abstract render(): void;

  protected afterRender(): void {}

  protected abstract save(): void;

  protected saveToFile(fileName: string): void {
    const distPath = path.join(process.cwd(), "dist");

    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath);
    }

    fs.writeFileSync(path.join(distPath, fileName), this.result);
  }
}