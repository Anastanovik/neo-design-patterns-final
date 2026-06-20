import * as fs from "fs";
import * as path from "path";
import { DirectoryReport } from "./DirectoryReport";

export class DirectoryAnalyzer {
  analyze(dirPath: string): DirectoryReport {
    const report: DirectoryReport = {
      files: 0,
      directories: 0,
      totalSize: 0,
      extensions: {},
    };

    const scanDirectory = (currentPath: string): void => {
      const items = fs.readdirSync(currentPath);

      for (const item of items) {
        const itemPath = path.join(currentPath, item);
        const stats = fs.statSync(itemPath);

        if (stats.isDirectory()) {
          report.directories += 1;
          scanDirectory(itemPath);
        } else if (stats.isFile()) {
          report.files += 1;
          report.totalSize += stats.size;

          const extension = path.extname(item) || "no extension";
          report.extensions[extension] =
            (report.extensions[extension] || 0) + 1;
        }
      }
    };

    scanDirectory(dirPath);

    return report;
  }
}