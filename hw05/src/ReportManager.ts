import { ReportAdapter } from './ReportAdapter';
import { JsonReportAdapter } from './JsonReportAdapter';
import { CsvReportAdapter } from './ CsvReportAdapter';
import { XmlReportAdapter } from './XmlReportAdapter';
import { AnalyzerFacade } from './AnalyzerFacade';
import * as fs from 'fs';
import * as path from 'path';

export class ReportManager {
  private adapter: ReportAdapter;
  private format: string;

  constructor(format: string) {
    this.format = format.toLowerCase();
    this.adapter = this.createAdapter(this.format);
  }

  private createAdapter(format: string): ReportAdapter {
    switch (format) {
      case 'json':
        return new JsonReportAdapter();
      case 'csv':
        return new CsvReportAdapter();
      case 'xml':
        return new XmlReportAdapter();
      default:
        throw new Error(`Unsupported format: ${format}`);
    }
  }

  generateReport(targetPath: string): void {
    try {
      const facade = new AnalyzerFacade(this.adapter);
      const reportContent = facade.generateReport(targetPath);

      const reportsDir = path.join(process.cwd(), 'reports');

      if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir);
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const fileName = `report-${timestamp}.${this.format}`;
      const filePath = path.join(reportsDir, fileName);

      fs.writeFileSync(filePath, reportContent);

      console.log(`Report generated successfully: ${filePath}`);
    } catch (error) {
      console.error('Failed to generate report:', error);
    }
  }
}