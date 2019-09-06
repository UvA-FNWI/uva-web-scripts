declare class ScrollSpy {
    static activeLeft: boolean;
    static scrollSpyIDs: string[];
    static scrollSpyDisplayIDs: string[];
    static scrollToId(id: number): void;
    static scrollToHtmlId(id: string): void;
    static registerScrollSpy(maxRetries: number, retryInterval: number): void;
}
export { ScrollSpy };
