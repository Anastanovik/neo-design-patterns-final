import * as fs from "fs";
import { UserData } from "../data/UserData";

export class XmlIterator implements Iterable<UserData> {
  private users: UserData[] = [];

  constructor(filePath: string) {
    const content = fs.readFileSync(filePath, "utf-8");

    const matches = content.matchAll(
      /<user>\s*<id>(.*?)<\/id>\s*<name>(.*?)<\/name>\s*<email>(.*?)<\/email>\s*<phone>(.*?)<\/phone>\s*<\/user>/gs,
    );

    for (const match of matches) {
      this.users.push({
        id: Number(match[1]),
        name: match[2],
        email: match[3],
        phone: match[4],
      });
    }
  }

  *[Symbol.iterator](): Iterator<UserData> {
    for (const user of this.users) {
      yield user;
    }
  }
}