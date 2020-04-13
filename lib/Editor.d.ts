interface ExtraButton {
    id: number;
    name: string;
}
declare class Editor {
    static forceMCEReInit: boolean;
    static InitMCE(extraButtons: ExtraButton[]): void;
    static pasteRemoveStyles(node: any): void;
    static pasteFiltered(node: any, allowedTags: any): any;
}
export { Editor };
