import { ResumeImporter } from "../importer/ResumeImporter";

/**
 * Фасад: єдина точка входу.
 * Приховує складність завантаження, валідації та рендерингу резюме.
 */
export class ResumePage {
  async init(jsonPath: string): Promise<void> {
    const data = await this.fetchData(jsonPath);
    const importer = new ResumeImporter(data);
    importer.import();
  }

  private async fetchData(path: string): Promise<unknown> {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load resume data: ${response.statusText}`);
    }
    return response.json();
  }
}