declare class Grid {
    static _NextFloatingHeaderId: number;
    static NextFloatingHeaderId(): string;
    static FloatingHeaderHidden: object;
    static HideFloatingHeaders(except: string): void;
    static SetRowHighlighting(sheet: CSSStyleSheet, rowLength: number, table: Element): void;
    static FloatTableHeader(dnIds: number[], tableDnId: number): void;
}
export { Grid };
