export class AppConfigService {
  private static instance: AppConfigService | null = null;

  public readonly companyName: string;
  public readonly footer: string;

  private constructor(companyName: string, footer: string) {
    this.companyName = companyName;
    this.footer = footer;
  }

  public static getInstance(): AppConfigService {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService(
        "Acme Inc.",
        "Confidential"
      );
    }

    return AppConfigService.instance;
  }
}