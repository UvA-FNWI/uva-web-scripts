declare class BrowserWarning {
    static IEWarningText(version: number): string;
    static SafariWarningText(version: number): string;
    static WarnOldBrowser(): void;
}
export { BrowserWarning };
