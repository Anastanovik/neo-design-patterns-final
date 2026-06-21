import { DataExporter } from "./DataExporter";

export class XmlExporter extends DataExporter {
  protected render(): void {
    const users = this.data
      .map(
        (user) => `  <user>
    <id>${user.id}</id>
    <name>${user.name}</name>
    <email>${user.email}</email>
    <phone>${user.phone}</phone>
  </user>`,
      )
      .join("\n");

    this.result = `<?xml version="1.0" encoding="UTF-8"?>
<users>
${users}
</users>`;
  }

  protected afterRender(): void {
    this.result += `\n<!-- Експорт згенеровано: ${new Date().toISOString()} -->`;
  }

  protected save(): void {
    this.saveToFile("users.xml");
  }
}