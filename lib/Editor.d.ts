declare class Editor {
    static forceMCEReInit: boolean;
    static InitMCE(): void;
    static pasteRemoveStyles(node: any): void;
    static pasteFiltered(node: any, allowedTags: any): any;
}
export { Editor };
